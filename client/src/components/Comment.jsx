import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {format} from "timeago.js";

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

export default function Comment({comment}){
    const [channel, setChannel] = useState({});

    useEffect(()=> {
        const fetchChannel = async () => {
            try{
                const res = await axios.get(BACKEND_URL+"users/find/"+comment.userID);
                setChannel(res.data);
            }catch (e){
                console.log(e)
            }
        }
        fetchChannel();

    }, [comment]);

    return(
        <Container>
            <Avatar src={channel.img}></Avatar>
            <Details>
                <Name>{channel.name}
                    <Date>{format(comment.createdAt)}</Date>
                </Name>
                <Text>
                    {comment.desc}
                </Text>
            </Details>
        </Container>
    )
}