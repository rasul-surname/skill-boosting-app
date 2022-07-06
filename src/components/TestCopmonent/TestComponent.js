import React from "react";
import {Box, Heading, HStack, Text, Center, Divider} from '@chakra-ui/react';

const TestComponent = () => {

    return (
        <Box py="2">
            <Heading size="2xl">Chakra UI Demo Page</Heading>
            <HStack spacing={1}>
                <Text fontSize="2xl">(2xl) In love with React & Next</Text>
                <Text fontSize="xl">(xl) In love with React & Next</Text>
                <Text fontSize="lg">(lg) In love with React & Next</Text>
                <Text fontSize="md">(md) In love with React & Next</Text>
                <Text fontSize="sm">(sm) In love with React & Next</Text>
                <Text fontSize="xs">(xs) In love with React & Next</Text>
            </HStack>
            <Center height="50px">
                <Divider orientation="vertical"/>
            </Center>
        </Box>
    )
}

export default TestComponent;