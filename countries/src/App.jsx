import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./components/DarkModeContext";

const AppProvider = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:country" element={<Country />} />
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <DarkModeProvider>
            <Router>
                <AppProvider />
            </Router>
        </DarkModeProvider>
    );
};
export default App;
