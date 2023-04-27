import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./app/about/About";
import {ChakraProvider} from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/"
                        element={<About/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
