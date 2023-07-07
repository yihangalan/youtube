import styled from "styled-components";
import youtube from "../img/youtube.png"
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

const Container = styled.div`
      flex: 1;
      background-color: ${({theme})=>theme.bgLighter};
      color: ${({theme})=>theme.text};
      font-size: 14px;
      height: 100%;
      position: fixed;
      left: 0;
      top: 56px;
      width: 230px;
      min-width: 230px;
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

export default function Menu({darkMode, setDarkMode}){

    return(
        <Container>
            <Wrapper>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    Subscriptions
                </Item>
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
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
                </Login>
                <Hr/>
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
                    Light Mode
                </Item>
                <Item style={{height:"30px"}}>
                </Item>
            </Wrapper>
        </Container>
    )
}