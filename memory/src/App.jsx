import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Multi from "./components/Multi";

const AppProivder = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/multi" element={<Multi />} />
        </Routes>
    );
};

const App = () => {
    return (
        <Router>
            <AppProivder />
        </Router>
    );
};
export default App;
