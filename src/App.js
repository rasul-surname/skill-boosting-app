import React from 'react';
import {Route, Routes} from "react-router-dom";

import {ChakraProvider, Container, theme} from '@chakra-ui/react';

import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import About from "./components/About/About";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Container maxW="container.lg" py="8">
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/events" element={<Events/>}/>
                </Routes>
            </Container>
        </ChakraProvider>
    );
}

export default App;
