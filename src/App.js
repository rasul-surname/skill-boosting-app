import React from 'react';
import {Route, Routes} from "react-router-dom";

import {ChakraProvider, Container, theme} from '@chakra-ui/react';

import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Album from "./components/Album/Album";
import Animation from "./components/Animation/Animation";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Container maxW="container.lg" py="8">
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/album" element={<Album/>}/>
                    <Route path="/animation" element={<Animation/>}/>
                </Routes>
            </Container>
        </ChakraProvider>
    );
}

export default App;
