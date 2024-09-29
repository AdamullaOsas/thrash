import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen w-full p-6 pt-[112px] md:pt-[126px] xl:py-[128px] xl:px-0 flex flex-col items-center xl:items-end xl:flex-row max-w-[1110px] xl:mx-auto xl:gap-[300px]">
            <div className="flex flex-col  items-center xl:items-start text-center xl:text-start max-w-[512px] xl:max-w-[540px]">
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
            <div className="flex justify-center items-center flex-1 md:mt-0">
                <button className="size-[144px] md:size-[272px] rounded-full bg-white text-blue-900 textPreset4Mobile md:textPreset4 md:mt-[50px] xl:mt-0">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};

export default Home;
