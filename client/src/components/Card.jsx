import styled from "styled-components";
import {Link} from "react-router-dom";

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

export default function Card({type}){
    return(
        <Container type={type}>
            <Link to={`/video/1`}>
                <Img type={type} src="https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg"/>
            </Link>
            <Details type={type}>
                <ChannelImg type={type} src="data:image/jpeg;base64,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"></ChannelImg>
                <Texts>
                    <Title>Video Title</Title>
                    <ChannelName>Channel Name</ChannelName>
                    <Info>2.3M views • 2 days ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}