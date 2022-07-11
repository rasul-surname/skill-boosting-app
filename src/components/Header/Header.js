import React from "react";
import {
    Box,
    Container,
    Flex,
    Image,
    HStack,
    useColorMode,
    Menu,
    MenuButton,
    IconButton,
    MenuList, MenuItem
} from "@chakra-ui/react";

import {ColorModeSwitcher} from './ColorModeSwitcher';
import Logo from '../../logo.svg';
import {NavLink} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import classes from './Header.module.css';

const Header = () => {
    const {colorMode} = useColorMode();

    return (
        <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW="container.lg">
                <Flex justifyContent="space-between" alignItems="center">
                    <Image src={Logo} alt="logo" boxSize="50px" objectFit="cover" className={classes.logo}/>
                    <Box as="nav">
                        <Box as="ul" listStyleType="none" className={classes.menu__mobile}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon/>}
                                    variant='outline'
                                />
                                <MenuList>
                                    <MenuItem>
                                        <NavLink to="/about">
                                            <Box as="li" p="2">
                                                <span>Команда</span>
                                            </Box>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink to="/events">
                                            <Box as="li" p="2">
                                                <span>Мероприятия</span>
                                            </Box>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink to="/album">
                                            <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                                <span>Фоточки</span>
                                            </Box>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink to="/animation">
                                            <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                                <span>Анимации</span>
                                            </Box>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink to="/dates">
                                            <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                                <span>Даты</span>
                                            </Box>
                                        </NavLink>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Box as="ul" listStyleType="none" className={classes.menu__desctop}>
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
                                <NavLink to="/animation">
                                    <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                        <span>Анимации</span>
                                    </Box>
                                </NavLink>
                                <NavLink to="/dates">
                                    <Box as="li" _hover={{background: '#01c0b1', color: 'white'}} p="2">
                                        <span>Даты</span>
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
