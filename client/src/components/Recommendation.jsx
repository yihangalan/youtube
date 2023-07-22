import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";
import {BACKEND_URL} from "../utils/backend.js";
import Card from "./Card.jsx";

const Container = styled.div`
    flex: 2;
`
const Recommendation = ({tags}) => {
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        const fetchVideos = async () => {
            try{
                const res  = await axios.get(BACKEND_URL+"videos/tags?tags="+tags);
                setVideos(res.data);
            }catch (e){
                console.log(e)
            }
        };
        fetchVideos();

    },[tags]);

    return (
        <Container>
            {videos.map((video)=>(
                <Card type="sm" key={video._id} video={video}></Card>
            ))}

        </Container>
    )
}
export default Recommendation;
