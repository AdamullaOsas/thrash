import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

// Import your background images
import bgHomeMobile from "./assets/home/background-home-mobile.jpg";
import bgHomeTablet from "./assets/home/background-home-tablet.jpg";
import bgHomeDesktop from "./assets/home/background-home-desktop.jpg";

import bgDestinationMobile from "./assets/destination/background-destination-mobile.jpg";
import bgDestinationTablet from "./assets/destination/background-destination-tablet.jpg";
import bgDestinationDesktop from "./assets/destination/background-destination-desktop.jpg";

import bgCrewMobile from "./assets/crew/background-crew-mobile.jpg";
import bgCrewTablet from "./assets/crew/background-crew-tablet.jpg";
import bgCrewDesktop from "./assets/crew/background-crew-desktop.jpg";

import bgTechnologyMobile from "./assets/technology/background-technology-mobile.jpg";
import bgTechnologyTablet from "./assets/technology/background-technology-tablet.jpg";
import bgTechnologyDesktop from "./assets/technology/background-technology-desktop.jpg";

const AppContent = () => {
    const location = useLocation();
    const width = useWindowWidth();

    const isMedium = width >= 768 && width < 1280;
    const isLarge = width >= 1280;

    const getBackgroundImage = (desktopImg, tabletImg, mobileImg) => {
        return isLarge
            ? `url(${desktopImg})`
            : isMedium
            ? `url(${tabletImg})`
            : `url(${mobileImg})`;
    };

    let backgroundImage = "";

    switch (location.pathname) {
        case "/":
            backgroundImage = getBackgroundImage(
                bgHomeDesktop,
                bgHomeTablet,
                bgHomeMobile
            );
            break;
        case "/destination":
            backgroundImage = getBackgroundImage(
                bgDestinationDesktop,
                bgDestinationTablet,
                bgDestinationMobile
            );
            break;
        case "/crew":
            backgroundImage = getBackgroundImage(
                bgCrewDesktop,
                bgCrewTablet,
                bgCrewMobile
            );
            break;
        case "/technology":
            backgroundImage = getBackgroundImage(
                bgTechnologyDesktop,
                bgTechnologyTablet,
                bgTechnologyMobile
            );
            break;
        default:
            backgroundImage = "";
    }

    return (
        <div
            className="min-h-screen w-full bg-center bg-cover text-white"
            style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
            }}
        >
            <Navbar />
            <div className="pt-[88px] md:pt-[96px] xl:pt-[136px]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </div>
        </div>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
