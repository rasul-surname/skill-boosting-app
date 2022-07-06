import React from 'react';
import { useRecoilValue } from 'recoil';
import { ListEmployeesState } from './state/atoms';

import {ChakraProvider, Container, theme} from '@chakra-ui/react';

import Header from "./components/Header/Header";
import TestComponent from "./components/TestCopmonent/TestComponent";
import CardList from "./components/CardList/CardList";

function App() {
    const ListEmployees = useRecoilValue(ListEmployeesState);

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Container maxW="container.lg">
                <TestComponent />
                <CardList cards={ListEmployees}/>
            </Container>
        </ChakraProvider>
    );
}

export default App;
