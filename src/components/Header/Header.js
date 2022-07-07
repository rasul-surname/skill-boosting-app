import React from "react";
import {Box, Container, Flex, Image, HStack, useColorMode} from "@chakra-ui/react";

import {ColorModeSwitcher} from './ColorModeSwitcher';
import Logo from '../../logo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
    const {colorMode} = useColorMode();

    return (
        <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW="container.lg">
                <Flex justifyContent="space-between" alignItems="center">
                    <Image src={Logo} alt="logo" boxSize="50px" objectFit="cover"/>
                    <Box as="nav">
                        <Box as="ul" listStyleType="none">
                            <HStack spacing="16">
                                <NavLink to="/about">
                                    <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                        <span>Команда</span>
                                    </Box>
                                </NavLink>
                                <NavLink to="/events">
                                    <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                        <span>Мероприятия</span>
                                    </Box>
                                </NavLink>
                                <NavLink to="/album">
                                    <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                        <span>Фоточки</span>
                                    </Box>
                                </NavLink>
                            </HStack>
                        </Box>
                    </Box>
                    <ColorModeSwitcher/>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
