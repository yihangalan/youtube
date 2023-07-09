import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined.js";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import youtube from "../img/youtube.png";
import {Link} from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


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
const MenuButton = styled.div`
  margin-right: 20px;
  margin-left: 5px;
  padding: 8px;
  border-radius: 50%;
  &:hover{
    background-color: ${({theme})=>theme.soft};
    
  }
`


export default function Navbar({switchmenubutton, setSwitchmenubutton}){

    return(
        <Container>
            <Wrapper>

                <div style={{display:"flex", alignItems:"center"}}>
                    <MenuButton onClick={()=>setSwitchmenubutton(!switchmenubutton)}>
                        <MenuOutlinedIcon></MenuOutlinedIcon>
                    </MenuButton>
                    <Link to={'/'} style={{textDecoration: "none", color: "inherit"}}>
                        <Logo>
                            <Img src={youtube}></Img>
                            YouTube
                        </Logo>
                    </Link>
                </div>
                <Search>
                    <Input placeholder="Search"></Input>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                </Search>
                <Link to={"/signin"}>
                    <Button>
                        <AccountCircleOutlinedIcon/>SIGN IN
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}