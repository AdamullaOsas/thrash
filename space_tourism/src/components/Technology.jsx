import React, { useState } from "react";
import data from "../data/data.json";

import picture1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import picture1Wide from "../assets/technology/image-launch-vehicle-landscape.jpg";

import picture2 from "../assets/technology/image-spaceport-portrait.jpg";
import picture2Wide from "../assets/technology/image-spaceport-landscape.jpg";

import picture3 from "../assets/technology/image-space-capsule-portrait.jpg";
import picture3Wide from "../assets/technology/image-space-capsule-landscape.jpg";

const Technology = () => {
    const { technology } = data;

    const [active, setActive] = useState(0);

    const pictures = [picture1, picture2, picture3];
    const picturesWide = [picture1Wide, picture2Wide, picture3Wide];
    return (
        <div className="min-h-screen w-full flex flex-col items-center xl:items-start xl:ml-[165px] py-6 md:pb-0 md:py-10 xl:p-0 xl:py-12 pt-[112px] md:pt-[128px] max-w-[1275px] xl:pt-[184px]">
            <div className="flex gap-6 font-BarlowC text-white md:self-start mb-[88px] xl:mb-0 md:pl-10 xl:pl-0">
                <span className="opacity-25 font-bold textPreset6Mobile md:text-[20px] xl:text-[28px]">
                    03
                </span>
                <p className="textPreset6Mobile md:text-[20px] xl:text-[28px]">
                    SPACE LAUNCH 101
                </p>
            </div>
            <div className="flex flex-col xl:flex-row-reverse xl:h-full xl:gap-8">
                <img
                    src={picturesWide[active]}
                    alt=""
                    className=" xl:hidden bg-cover bg-center w-full bg-no-repeat "
                />
                <img
                    src={pictures[active]}
                    alt=""
                    className="hidden xl:block bg-cover bg-center w-auto bg-no-repeat h-[600px]"
                />
                <div className="flex flex-col items-center mt-8 xl:flex-row xl:gap-16">
                    <div className="flex gap-4 xl:gap-8 xl:flex-col">
                        {pictures.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`size-10 md:size-14 xl:size-20 flex items-center justify-center rounded-full border-[1px] border-white border-opacity-25 textPreset4Mobile md:text-[24px] ${
                                    active === index
                                        ? "bg-white text-blue-900"
                                        : "hover:border-white"
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <div className="mt-10 px-6 flex flex-col gap-4 text-center xl:text-start md:mb-10">
                        <p className="textPreset4Mobile opacity-50 md:text-[24px]">
                            THE TERMINOLOGY…
                        </p>
                        <h1 className="textPreset3Mobile uppercase md:text-[40px]">
                            {technology[active].name}
                        </h1>
                        <p className="textPreset9Mobile text-blue-300 md:text-[18px] md:max-w-[512px] ">
                            {technology[active].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
