import styled from "styled-components";
import {useEffect, useState} from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({theme})=>theme.bgLighter};
  color: ${({theme})=>theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const Title = styled.h1`
    text-align: center;
`

const Input = styled.input`
  border: 1px solid ${({theme})=>theme.soft};
  color: ${({theme})=>theme.text};
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
`

const Desc = styled.textarea`
  border: 1px solid ${({theme})=>theme.soft};
  color: ${({theme})=>theme.text};
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
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

const Label = styled.label`
  font-size: 14px;
`

const Upload = ({setOpen}) => {
    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [imgPercentage, setImgPercentage] = useState(0);
    const [videoPercentage, setVideoPercentage] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleTags = (e) => {
        setTags([e.target.value.split(",")]);
    }

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPercentage(progress) : setVideoPercentage(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        console.log("unauthorized");
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        console.log("canceled");
                        break;


                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        console.log("unknown");
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs({...inputs, [urlType]: downloadURL})
                });
            });

    }

    useEffect(()=>{
        video && uploadFile(video, "videoUrl");
    },[video])

    useEffect(()=>{
        img && uploadFile(img, "imgUrl");
    },[img])


    return (
        <Container>
            <Wrapper>
                <Close onClick={()=>setOpen(false)}>X</Close>
                <Title name="title" onChange={handleChange}>Upload a New Video</Title>
                <Label>Video:</Label>

                {videoPercentage>0
                    ?("Uploading" + videoPercentage + "%" )
                    : <Input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])}/>
                }

                <Input type="text" placeholder="Title"/>
                <Desc name="desc" onChange={handleChange} placeholder="Description" rows={8}/>
                <Input onChange={handleTags} type="text" placeholder="Separate the tags with commas."/>
                <Label>Image:</Label>

                {imgPercentage>0
                    ?("Uploading" + imgPercentage + "%" )
                    : <Input type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])}/>
                }
                <Button>Upload</Button>
            </Wrapper>
        </Container>
    );
}

export default Upload;