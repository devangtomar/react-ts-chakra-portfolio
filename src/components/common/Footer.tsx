import {
    ButtonGroup,
    Container,
    IconButton,
    Stack,
    Text
} from '@chakra-ui/react'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {Box, Flex, Divider, useBreakpointValue} from '@chakra-ui/react';

export default function Footer() {
    const padding = useBreakpointValue({base: 6, lg: 20});
    return (
        <Box p={padding}>
            <Divider/>
            <Flex align="center" justify="space-between" borderTop="1px solid #ccc"
                p={2}>
                <Box ml={2}>
                    <Text fontSize="m" color="fg.subtle" as='b'>
                        Devang Tomar © 2023
                    </Text>
                </Box>
                <Flex align="center">
                    <Stack justify="space-between" direction="row" align="center">
                        <ButtonGroup variant="tertiary">
                            <IconButton as="a" href="#" aria-label="LinkedIn"
                                icon={
                                    <FaLinkedin
                                fontSize="1.25rem"/>
                                }/>
                            <IconButton as="a" href="#" aria-label="GitHub"
                                icon={
                                    <FaGithub
                                fontSize="1.25rem"/>
                                }/>
                            <IconButton as="a" href="#" aria-label="Twitter"
                                icon={
                                    <FaTwitter
                                fontSize="1.25rem"/>
                                }/>
                        </ButtonGroup>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
