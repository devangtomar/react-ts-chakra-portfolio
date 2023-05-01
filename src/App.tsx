import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./app/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
