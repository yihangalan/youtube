import './App.css'
import styled, {ThemeProvider} from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {darkTheme, lightTheme} from "./utils/Theme.js";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";

const Container = styled.div`
        display: flex;
        
    `

const Main = styled.div`
      flex: 7;
      background-color: ${({theme})=>theme.bg};
      height: 100vh;
      
      
        
    `
const Wrapper = styled.div`
        
    `


function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : true;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
          <Navbar/>
        <Container>
            <BrowserRouter>
                <div style={{width: "230px"}}></div>
                <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Wrapper>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<Home></Home>}></Route>
                                <Route path='video'>
                                    <Route path=':id' element={<Video></Video>}></Route>
                                </Route>
                            </Route>
                        </Routes>
                    </Wrapper>
                </Main>
            </BrowserRouter>
        </Container>
      </ThemeProvider>
    )
}

export default App
