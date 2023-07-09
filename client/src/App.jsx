import './App.css'
import styled, {ThemeProvider} from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {darkTheme, lightTheme} from "./utils/Theme.js";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import Signin from "./pages/Signin";

const Container = styled.div`
        display: flex;
        
    `

const Main = styled.div`
      flex: 7;
      background-color: ${({theme})=>theme.bg};
`
const Wrapper = styled.div`
        padding: 22px 90px;
`
const SwitchBlock = styled.div`
    min-width: ${({switchmenubutton})=>switchmenubutton==="false" ? "0":"230px"};
`


function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : true;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const [switchmenubutton, setSwitchmenubutton] = useState(true);

    return (
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
          <BrowserRouter>
            <Navbar
                switchmenubutton={switchmenubutton}
                setSwitchmenubutton={setSwitchmenubutton}
            />
            <Container>
                <SwitchBlock switchmenubutton={switchmenubutton.toString()}></SwitchBlock>
                <Menu
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    switchmenubutton={switchmenubutton}
                    setSwitchMenuButton={setSwitchmenubutton}
                />
                <Main>
                    <Wrapper>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<Home type="random"></Home>}></Route>
                                <Route path={"trends"} element={<Home type="trend"></Home>}></Route>
                                <Route path={"subscriptions"} element={<Home type="sub"></Home>}></Route>
                                <Route path='signin' element={<Signin></Signin>}/>
                                <Route path='video/:id' element={<Video></Video>}/>
                            </Route>
                        </Routes>
                    </Wrapper>
                </Main>
            </Container>
          </BrowserRouter>
      </ThemeProvider>
    )
}

export default App
