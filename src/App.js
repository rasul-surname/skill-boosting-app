import React from 'react';
import {Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';

import {ChakraProvider, Container, theme} from '@chakra-ui/react';

import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Album from "./components/Album/Album";
import Animation from "./components/Animation/Animation";
import Dates from "./components/Dates/Dates";

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
});


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Header/>
                <Container maxW="container.lg" py="4">
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/events" element={<Events/>}/>
                        <Route path="/album" element={<Album/>}/>
                        <Route path="/animation" element={<Animation/>}/>
                        <Route path="/dates" element={<Dates />}/>
                    </Routes>
                </Container>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
