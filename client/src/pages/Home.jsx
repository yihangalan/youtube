import styled from "styled-components";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {useSelector} from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default function Home({type}) {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get( BACKEND_URL + "videos/" + type,{
                withCredentials: true
            });
            setVideos(res.data);
        }
        fetchVideos();
    },[type])

    const {currentUser} = useSelector(state=>state.user)

    return(
        <Container>
            {type==="sub" && !currentUser? <div>you should log in</div>:
                videos.map((video)=>(
                        <Card key={video._id} video={video}></Card>
                    ))
            }

        </Container>
    )
}