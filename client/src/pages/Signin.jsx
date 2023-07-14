import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {useDispatch} from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "../redux/userSlice.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({theme})=>theme.text};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme})=>theme.bgLighter};
  border:1px solid ${({theme})=>theme.soft};
  padding: 20px 50px;
  gap: 10px;
`
const Title = styled.h1`
    font-size: 24px;
`

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
`

const Input = styled.input`
  border: 1px solid ${({theme})=>theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({theme})=>theme.text};
`

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({theme})=>theme.soft};
  color: ${({theme})=>theme.textSoft};
  
`

const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({theme})=>theme.textSoft};
`

const Links = styled.div`
    margin-left: 50px;
  
`

const Link = styled.span`
    margin-left: 30px;
`
const Error = styled.span`
  background-color: #f44336;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  display: ${({text})=>text!==""?"block":"none"}
`

export default function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        if(loginError !== ""){
            setTimeout(()=>{
                setLoginError("");
            },5000)
        }
    },[loginError]);

    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch(loginStart())
        try{
            // const res = await axios.post(BACKEND_URL+"auth/signin",{name,password});
            const res = await axios.post(BACKEND_URL + "auth/signin", {
                name,
                password
            }, {
                withCredentials: true
            });

            console.log(res.data);
            dispatch(loginSuccess(res.data));
        }catch (err) {
            console.log(err.response.data.message);
            setLoginError(err.response.data.message)
            dispatch(loginFailure())
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>to continue to YouTube</SubTitle>
                <Input placeholder={"Username"} type={"text"} onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder={"Password"} type={"password"} onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleLogin}>Sign in</Button>
                <Error text={loginError}>
                    {loginError}
                </Error>

                <Title>OR</Title>
                <Input placeholder={"Username"} type={"text"} onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder={"Email"} type={"text"} onChange={(e)=>setEmail(e.target.value)}/>
                <Input placeholder={"Password"} type={"password"} onChange={(e)=>setPassword(e.target.value)}/>
                <Button>Sign up</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}