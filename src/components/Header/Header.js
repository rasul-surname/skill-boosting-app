import React from "react";
import {Box, Container, Flex, Image, useColorMode} from "@chakra-ui/react";

import {ColorModeSwitcher} from './ColorModeSwitcher';
import Logo from '../../logo.svg';

const Header = () => {
    const { colorMode } = useColorMode();

    return (
        <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.400' : 'gray.200'} border="1px" borderColor='black.200'>
            <Container maxW="container.lg">
                <Flex justifyContent="space-between" alignItems="center">
                    <Image src={Logo} alt="logo" boxSize="50px" objectFit="cover"/>
                    <ColorModeSwitcher/>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
