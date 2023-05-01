import {ReactNode} from 'react';
import {
    Box,
    Heading,
    Flex,
    Avatar,
    Link,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode
} from '@chakra-ui/react';

import {MoonIcon, SunIcon} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

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
        href={'#'}>
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
                    px={10}>
                    <Flex alignItems={'center'}>
                        <Avatar name='Devang Tomar' size='md' src='https://avatars.githubusercontent.com/u/32426600?v=4'/>
                        <Heading size='md'
                            ml={2}>Devang Tomar</Heading>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'}
                            spacing={7}>
                            <Button onClick={toggleColorMode}
                                variant="unstyled">
                                {
                                colorMode === 'light' ? <MoonIcon/>: <SunIcon/>
                            } </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
