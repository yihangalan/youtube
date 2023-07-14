import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
      flex: 1;
      background-color: ${({theme})=>theme.bgLighter};
      color: ${({theme})=>theme.text};
      font-size: 14px;
      height: 100%;
      position: fixed;
      left: 0;
      top: 56px;
      width: ${({switchmenubutton})=>switchmenubutton==="false" ? "0px":"230px"};
      min-width:${({switchmenubutton})=>switchmenubutton==="false" ? "0px":"230px"};
      overflow: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0;
      }
      &:hover::-webkit-scrollbar {
        width: 8px;
      }  
      &:hover::-webkit-scrollbar-thumb {
        background-color: #aaaaaa;
        border-radius: 10px;
      }
      overscroll-behavior-x: contain;
      display: ${({switchmenubutton})=>switchmenubutton==="false" && "none"};
    `

const SmallContainer = styled.div`
  display: ${({switchmenubutton})=>switchmenubutton==="true" && "none"};
  background-color: ${({theme})=>theme.bgLighter};
  color: ${({theme})=>theme.text};
  font-size: 14px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 56px;
  padding: 18px 20px;
  
`

const Wrapper = styled.div`
  padding: 18px 26px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  &:hover{
    background-color: ${({type, theme})=>type !== "last" && theme.soft}}
    border-radius: 10px;
  }
  
`

const Hr = styled.hr`
      margin: 15px 0;
      border: 0.5px solid ${({theme})=>theme.soft};
    `

const Login = styled.div`
        
    `
const Button = styled.button`
      padding: 5px 15px;
      background-color: transparent;
      border: 1px solid #3ea6ff;
      color: #3ea6ff;
      border-radius: 3px;
      font-weight: 500;
      margin-top: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    `
const Title = styled.h2`
      font-size: 14px;
      font-weight: 500;
      color: #aaaaaa;
      margin-bottom: 20px;
`



export default function Menu({darkMode, setDarkMode, switchmenubutton}){
    const {currentUser} = useSelector(state=>state.user)

    return(
        <div>
            <Container switchmenubutton={switchmenubutton.toString()}>
                <Wrapper>
                    <Link to={"/"} style={{textDecoration:"none", color: "inherit"}}>
                        <Item>
                            <HomeIcon/>
                            Home
                        </Item>
                    </Link>
                    <Link to={"/trends"} style={{textDecoration:"none", color: "inherit"}}>
                        <Item>
                            <ExploreOutlinedIcon/>
                            Explore
                        </Item>
                    </Link>
                    <Link to={"/subscriptions"} style={{textDecoration:"none", color: "inherit"}}>
                        <Item>
                            <SubscriptionsOutlinedIcon/>
                            Subscriptions
                        </Item>
                    </Link>
                    <Hr/>
                    <Item>
                        <VideoLibraryOutlinedIcon/>
                        Library
                    </Item>
                    <Item>
                        <HistoryIcon/>
                        History
                    </Item>
                    <Hr/>
                    {!currentUser&&
                        <>
                        <Login>
                            Sign in to like videos, comment, and subscribe.
                            <Link to={"/signin"}>
                                <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
                            </Link>
                        </Login>
                        <Hr/>
                    </>}
                    <Title>BEST OF YOUTUBE</Title>

                    <Item>
                        <MusicNoteOutlinedIcon/>
                        Music
                    </Item>
                    <Item>
                        <EmojiEventsOutlinedIcon/>
                        Sports
                    </Item>
                    <Item>
                        <SportsEsportsOutlinedIcon/>
                        Gaming
                    </Item>
                    <Item>
                        <MovieCreationOutlinedIcon/>
                        Movies
                    </Item>
                    <Item>
                        <ArticleOutlinedIcon/>
                        News
                    </Item>
                    <Item>
                        <LiveTvIcon/>
                        Live
                    </Item>
                    <Hr/>
                    <Item>
                        <SettingsOutlinedIcon/>
                        Settings
                    </Item>
                    <Item>
                        <FlagOutlinedIcon/>
                        Report
                    </Item>
                    <Item>
                        <HelpOutlineIcon/>
                        Help
                    </Item>
                    <Item onClick={() => setDarkMode(!darkMode)}>
                        <ModeNightOutlinedIcon/>
                        {darkMode?"Light Mode":"Dark Mode"}
                    </Item>
                    <Item type="last" style={{height:"30px"}}>
                    </Item>
                </Wrapper>
            </Container>

            <SmallContainer switchmenubutton={switchmenubutton.toString()}>
                <Link to={"/"} style={{textDecoration:"none", color: "inherit"}}>
                    <Item switchmenubutton={switchmenubutton.toString()}>
                        <HomeIcon style={{padding: "0px 8px"}}/>
                    </Item>
                </Link>
                <Item>
                    <ExploreOutlinedIcon style={{padding: "0px 8px"}}/>
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon style={{padding: "0px 8px"}}/>
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon style={{padding: "0px 8px"}}/>
                </Item>
                <Item>
                    <HistoryIcon style={{padding: "0px 8px"}}/>
                </Item>
                <Hr/>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <ModeNightOutlinedIcon style={{padding: "0px 8px"}}/>
                </Item>
            </SmallContainer>
        </div>
    )
}