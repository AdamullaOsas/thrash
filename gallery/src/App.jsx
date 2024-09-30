import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Slides from "./components/Slides";
import Navbar from "./components/Navbar";

const AppContent = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Slides" element={<Slides />} />
            </Routes>
        </div>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
