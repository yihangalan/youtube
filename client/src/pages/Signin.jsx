import styled from "styled-components";

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

export default function Signin() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>to continue to YouTube</SubTitle>
                <Input placeholder={"Username"} type={"text"}/>
                <Input placeholder={"Password"} type={"password"}/>
                <Button>Sign in</Button>

                <Title>OR</Title>
                <Input placeholder={"Username"} type={"text"}/>
                <Input placeholder={"Email"} type={"text"}/>
                <Input placeholder={"Password"} type={"password"}/>
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