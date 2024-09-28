import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

import bgMobileHome from "../assets/home/background-home-mobile.jpg";
import bgTabletHome from "../assets/home/background-home-tablet.jpg";
import bgDesktopHome from "../assets/home/background-home-desktop.jpg";

const Home = () => {
    const width = useWindowWidth();

    const isMedium = width >= 768 && width < 1280;
    const isLarge = width >= 1280;

    const backgroundImage = isLarge
        ? bgDesktopHome
        : isMedium
        ? bgTabletHome
        : bgMobileHome;

    return (
        <div
            className="min-h-screen w-full bg-center bg-cover text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            Home
        </div>
    );
};

export default Home;
