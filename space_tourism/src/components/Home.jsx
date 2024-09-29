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
            className="min-h-screen w-full bg-center p-6 flex flex-col items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            <div className="flex flex-col gap-6 items-center text-center max-w-[512px] xl:max-w-[540px]">
                <p className="textPreset6Mobile text-blue-300 md:textPreset5">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className="textPreset1Mobile text-white md:textPreset1">
                    SPACE
                </h1>
                <p className="textPreset9Mobile md:textPreset9 text-blue-300">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>
        </div>
    );
};

export default Home;
