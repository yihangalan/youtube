import styled from "styled-components";
import {Link} from "react-router-dom";
import {format} from "timeago.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";

const Container = styled.div`
  width: ${({type})=> type !== "sm"&& "360px"};
  margin-bottom: ${({type})=> type === "sm"? "10px":"45px"};
  cursor: pointer;
  display: ${({type})=> type === "sm" && "flex"};
  gap:${({type})=> type === "sm" && "10px"};
  min-width: ${({type})=> type === "sm" && "380px"};
`

const Img = styled.img`
  width: 100%;
  height: ${({type})=> type === "sm" ? "120px": "202px"};
  border-radius: ${({type})=> type === "sm" && "10px"};
  background-color: #999;
  gap: 10px;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${({type})=> type !== "sm" ? "16px": "3px"};
  gap: 12px;
  flex: 1;
`

const ChannelImg = styled.img`
  ${({type})=> type === "sm" && "display: none"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`

const Texts = styled.div`

    
`
const Title = styled.h1`
  display: table-cell;
  vertical-align: top;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=> theme.text};

    
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme})=> theme.textSoft};
  margin: 9px 0;

    
`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme})=> theme.textSoft};
  

    
`

export default function Card({type, video}){

    const [channel, setChannel] = useState({})
    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get( BACKEND_URL + "users/find/" + video.userID);
            setChannel(res.data);
        }
        fetchChannel();
    },[video.userID])

    return(
        <Container type={type}>
            <Link to={`/video/1`}>
                <Img type={type} src={video.imgUrl}/>
            </Link>
            <Details type={type}>
                <ChannelImg type={type} src={channel.img}></ChannelImg>
                <Texts>
                    <Title>{video.title}</Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <Info>{video.views} views • {format(video.createdAt)}</Info>
                </Texts>
            </Details>
        </Container>
    )
}