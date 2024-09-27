import React, { useEffect, useState } from "react";
import MobileNavbar from "./components/MobileNavbar";
import BookmarkManager from "./components/BookmarkManager";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import MobileFooter from "./components/MobileFooter";
import Footer from "./components/Footer";

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
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            {isMobile ? <MobileNavbar /> : <Navbar />}
            <BookmarkManager />
            <Features />
            <Extension />
            <Accordion />
            <Contact />
            {isMobile ? <MobileFooter /> : <Footer />}
        </div>
    );
};

export default App;
