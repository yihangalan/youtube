import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Comments from "../components/Comments.jsx";
import Card from "../components/Card.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {dislike, fetchFailure, fetchStart, fetchSuccess, like} from "../redux/videoSlice.js";
import {format} from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div`
    
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};


`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Info = styled.span`
  color: ${({theme})=>theme.textSoft};

`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme})=>theme.text};
`

const Popup = styled.div`
  position: absolute;
  top: 50px;
  display: none;
  background-color: #606060;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  `

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: ${({theme})=>theme.soft};
    padding: 5px 10px;
    border-radius: 30px;
    cursor: pointer;
  &:hover{
    background-color: ${({theme})=>theme.buttonHover};
  }
  &:hover ${Popup}{
    display: flex;
    align-items: center;
  }
  position: relative;
`
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme})=>theme.soft};
  
`

const Recommendation = styled.div`
    flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text}
`
const ChannelName = styled.span`
  font-weight: 500;    
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
    font-size: 14px;
  `

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  border: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
    
`
export default function Video() {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const {currentUser} = useSelector(state=>state.user);
    const {currentVideo} = useSelector(state=>state.video);

    const dispatch = useDispatch();

    const path = useLocation().pathname.split("/")[2];
    const [channel, setChannel] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                dispatch(fetchStart());
                const videoRes = await axios.get(BACKEND_URL+"videos/find/"+path);
                const ChannelRes = await axios.get(BACKEND_URL+"users/find/"+videoRes.data.userID);
                dispatch(fetchSuccess(videoRes.data));
                setChannel(ChannelRes.data);
            }catch (e){
                console.log(e)
                dispatch(fetchFailure());
            }
        }
        fetchData();
    },[path, dispatch]);

    const handleLike = async ()=>{
        if(!currentUser){
            navigate("/signin");
            return;
        }
        await axios.put(BACKEND_URL+"users/like/" + currentVideo._id);
        dispatch(like(currentUser?._id));
    }

    const handleDislike = async ()=>{
        if(!currentUser){
            navigate("/signin");
            return;
        }
        dispatch(dislike(currentUser?._id));
        try {
            await axios.put(BACKEND_URL + "users/dislike/" + currentVideo._id);
        } catch (error) {
            dispatch(like(currentVideo._id));
        }
    }



    return(
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="629"
                        src="https://www.youtube.com/embed/GrG2-oX5z24"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.view} views • {format(currentVideo.createdAt)}</Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                            {currentVideo.likes?.includes(currentUser?._id) ? (
                                <ThumbUpIcon/>
                                ) : (
                                <ThumbUpOutlinedIcon/>
                            )} {" "}
                            {currentVideo.likes?.length}
                            <Popup style={{width:"66px"}}>I like this</Popup>
                        </Button>

                        <Button onClick={handleDislike}>
                            {currentVideo.dislikes?.includes(currentUser?._id)? (
                                <ThumbDownIcon/>
                                ):(
                                <ThumbDownOutlinedIcon/>
                                )} {" "}
                            dislike
                            <Popup style={{width:"85px"}}>I dislike this</Popup>
                        </Button>

                        <Button>
                            <ReplyAllOutlinedIcon/>share
                            <Popup>share</Popup>
                        </Button>
                        <Button>
                            <SaveAltOutlinedIcon/>save
                            <Popup>save</Popup>
                        </Button>
                    </Buttons>
                </Details>
                <Hr></Hr>
                <Channel>
                    <ChannelInfo>
                        <Img src={channel.img}></Img>
                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
                            <Description>
                                {currentVideo.desc}
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr></Hr>
                <Comments></Comments>
            </Content>
            {/*<Recommendation>*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*    /!*<Card type="sm"/>*!/*/}
            {/*</Recommendation>*/}
        </Container>
    )
}