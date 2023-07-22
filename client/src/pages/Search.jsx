import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../utils/backend.js";
import {useLocation} from "react-router-dom";
import Card from "../components/Card.jsx";

const Container= styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  height: 100vh;
`
const Search = () => {
    const [videos, setVideos] = useState([]);
    const query = useLocation().search;

    useEffect(()=>{
        const fetchVideos = async () => {
            try{
                const res  = await axios.get(BACKEND_URL+"videos/search" + query);
                setVideos(res.data);
            }catch (e){
                console.log(e)
            }
        };
        fetchVideos();

    },[query]);

    return (
        <Container>
            {videos.map((video)=>(
                <Card key={video._id} video={video}></Card>
            ))}
        </Container>
    )
}
export default Search;