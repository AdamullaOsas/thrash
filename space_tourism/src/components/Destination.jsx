import React, { useState } from "react";
import data from "../data/data.json";

import moonImage from "../assets/destination/image-moon.webp";
import marsImage from "../assets/destination/image-mars.webp";
import europaImage from "../assets/destination/image-europa.webp";
import titanImage from "../assets/destination/image-titan.webp";

const Destination = () => {
    const { destinations } = data;
    const [active, setActive] = useState(0);
    const images = [moonImage, marsImage, europaImage, titanImage];
    const links = ["MOON", "MARS", "EUROPA", "TITAN"];

    return (
        <div className="min-h-screen w-full flex flex-col items-center max-w-[1110px] xl:mx-auto p-6 md:p-10 xl:p-0 xl:py-12 pt-[112px] md:pt-[128px] xl:pt-[184px]">
            <div className="flex gap-6 font-BarlowC text-white md:self-start">
                <span className="opacity-25 font-bold textPreset6Mobile md:text-[20px] xl:text-[28px]">
                    01
                </span>
                <p className="textPreset6Mobile md:text-[20px] xl:text-[28px]">
                    PICK YOUR DESTINATION
                </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center xl:w-full xl:justify-between">
                <img
                    src={images[active]}
                    alt="Destination"
                    className="size-[150px] md:size-[300px] xl:size-[480px] mt-[50px] md:mt-[66px] xd:mt-0"
                />
                <div className="flex flex-col xl:mt-[133px]">
                    <div className="flex flex-col items-center xl:items-start pb-6 xl:pb-10 border-b-[1px] border-blue-300 xl:max-w-[445px]">
                        <div className="flex gap-8 mt-[58px] md:mt-[74px] xl:mt-0 textPreset8Mobile md:textPreset8 text-blue-300">
                            {links.map((link, index) => (
                                <button onClick={() => setActive(index)}>
                                    {link}
                                </button>
                            ))}
                        </div>
                        <h1 className="textPreset2Mobile md:text-[80px] text-white mt-6">
                            {destinations[active].name}
                        </h1>
                        <p className="textPreset9Mobile text-blue-300 md:max-w-[514px] text-center xl:text-start">
                            {destinations[active].description}
                        </p>
                    </div>

                    <div className="mt-6 xl:mt-10 flex flex-col justify-between items-center md:flex-row md:w-full md:max-w-[514px] gap-6">
                        <div className="flex flex-col items-center xl:items-start gap-3 md:w-1/2">
                            <p className="textPreset7 text-blue-300">
                                AVG. DISTANCE
                            </p>
                            <p className="textPreset6 uppercase">
                                {destinations[active].distance}
                            </p>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-3 md:w-1/2">
                            <p className="textPreset7 uppercase text-blue-300">
                                Est. travel time
                            </p>
                            <p className="textPreset6 uppercase">
                                {destinations[active].travel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Destination;
