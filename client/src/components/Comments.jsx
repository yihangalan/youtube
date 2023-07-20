import styled from "styled-components";
import Comment from "./Comment.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {useSelector} from "react-redux";

const Container = styled.div`
`

const NewComments = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme})=>theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({theme})=>theme.text};
`

export default function Comments({videoID}){
    const [comments, setComments] = useState([])

    const{currentUser} = useSelector((state)=>state.user);

    useEffect(()=>{
        const fetchComments = async () => {
            try{
                const res  = await axios.get(BACKEND_URL+"comments/" + videoID);
                setComments(res.data);
            }catch (e){
                console.log(e)
            }
        };
        fetchComments();
    }, [videoID]);


    return(
        <Container>
            {currentUser
                ? <NewComments>
                <Avatar src={currentUser?.img}></Avatar>
                <Input placeholder="Add a comment."></Input>
                </NewComments>
                : <h3>Sign in to comment</h3>
            }
            {comments.map((comment)=>(
                <Comment key={comment._id} comment={comment}/>
            ))}

        </Container>
    )
}