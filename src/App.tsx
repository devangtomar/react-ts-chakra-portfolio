import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ChakraProvider, Box, Center} from "@chakra-ui/react";
import About from "./app/about/About";

function App() {
    return (
        <ChakraProvider>
            <Center>
                <Box>
                    <Router>
                        <Routes>
                            <Route path="/"
                                element={<About/>}/>
                        </Routes>
                    </Router>
                </Box>
            </Center>
        </ChakraProvider>
    );
}

export default App;
