import {ReactNode} from 'react';
import {
    Heading,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton
} from '@chakra-ui/react';

import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
const Links = [
    'About 🙋‍♂️',
    'Blog 📃',
    'Projects 📝',
    'Illustration 🖼️',
    'GitHub 👨‍💻'
];

const NavLink = ({children} : {
    children: ReactNode
}) => (
    <Link px={2}
        py={1}
        rounded={'md'}
        _hover={
            {
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700')
            }
        }
        href={'#'}
        fontSize={'xl'}
        fontWeight={'medium'}
        >
        {children} </Link>
);

export default function Nav() {
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Box bg={
                useColorModeValue('gray.150', 'gray.900')
            }>
                <Flex h={20}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    px={6}> 
                    <Flex alignItems={'center'}>
                        <Avatar name='Devang Tomar' size='md' src='../../../assets/avatar.jpg'/>
                        <Heading size={"md"}
                            ml={4}>Devang Tomar</Heading>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'}
                            spacing={7}
                            m={4}>
                            <Button onClick={toggleColorMode}
                                variant="unstyled">
                                {
                                colorMode === 'light' ? <MoonIcon/>: <SunIcon/>
                            } </Button>
                        </Stack>
                        <IconButton size={'md'}
                            variant="unstyled"
                            icon={
                                isOpen ? <CloseIcon/>: <HamburgerIcon/>
                            }
                            aria-label={'Open Menu'}
                            display={
                                {md: 'none'}
                            }
                            onClick={
                                isOpen ? onClose : onOpen
                            }/>
                        <HStack spacing={8}
                            alignItems={'center'}>
                            <HStack as={'nav'}
                                spacing={4}
                                display={
                                    {
                                        base: 'none',
                                        md: 'flex'
                                    }
                            }>
                                {
                                Links.map((link) => (
                                    <NavLink key={link}>
                                        {link}</NavLink>
                                ))
                            } </HStack>
                        </HStack>
                    </Flex>
                </Flex>
                {
                isOpen ? (
                    <Box pb={8}
                        pt={8}
                        display={
                            {md: 'none'}
                    }>
                        <Flex justifyContent="center">
                            <Stack as={'nav'}
                                spacing={4}>
                                {
                                Links.map((link) => (
                                    <NavLink key={link}>
                                        {link} </NavLink>
                                ))
                            } </Stack>
                        </Flex>
                    </Box>
                ) : null
            } </Box>
        </>
    );
}
