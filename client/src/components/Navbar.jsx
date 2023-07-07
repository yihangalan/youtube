import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined.js";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import youtube from "../img/youtube.png";



const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
  color: ${({theme})=>theme.text};
  z-index: 1;
`


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: space-between;
  position: relative;

`

const Search = styled.div`
  width: 36%;
  //position: absolute;
  //left: 0;
  //right: 0;
  //margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

`

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${({theme})=>theme.text};

`
const Button = styled.button`
      padding: 5px 15px;
      background-color: transparent;
      border: 1px solid #3ea6ff;
      color: #3ea6ff;
      border-radius: 3px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    `
const Logo = styled.div`
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: bold;
  
    `
const Img = styled.img`
        height: 30px;
    `
export default function Navbar(){
    return(
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={youtube}></Img>
                    YouTube
                </Logo>
                <Search>
                    <Input placeholder="Search"></Input>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                </Search>
                <Button>
                    <AccountCircleOutlinedIcon/>SIGN IN
                </Button>
            </Wrapper>
        </Container>
    )
}