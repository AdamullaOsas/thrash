import React, { useEffect, useState } from "react";
import MobileNavbar from "./components/MobileNavbar";
import BookmarkManager from "./components/BookmarkManager";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Accordion from "./components/Accordion";
const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col">
            {isMobile ? <MobileNavbar /> : <Navbar />}
            <BookmarkManager />
            <Features />
            <Extension />
            <Accordion />
        </div>
    );
};

export default App;
