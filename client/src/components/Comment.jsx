import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme})=>theme.text}
    
`
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme})=>theme.textSoft};
  margin-left: 5px;
`

const Text = styled.span`
  font-size: 14px;
  color: ${({theme})=>theme.text};
    
`

export default function Comment() {
    return(
        <Container>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhneTAc_3_X-4kBhIOZZorsNxrxLyGoMnuQA&usqp=CAU"></Avatar>
            <Details>
                <Name>Lisa
                    <Date>3 days ago</Date>
                </Name>
                <Text>
                    To anybody who's reading this, I pray that whatever is hurting you or whatever you are constantly
                    stressing about gets better.
                </Text>
            </Details>
        </Container>
    )
}