import React, { useState } from "react";

import image1 from "../images/illustration-features-tab-1.svg";
import image2 from "../images/illustration-features-tab-2.svg";
import image3 from "../images/illustration-features-tab-3.svg";
import Blob from "./Blob";

const Features = () => {
    const features = [
        {
            image: image1,
            name: "Simple Bookmarking",
            title: "Bookmark in one click",
            para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        },
        {
            image: image2,
            name: "Speedy Searching",
            title: "Intelligent search",
            para: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        },
        {
            image: image3,
            name: "Easy Sharing",
            title: "Share your bookmarks",
            para: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        },
    ];

    const [active, setActive] = useState(features[0].name);

    const activeFeature = features.find((feature) => feature.name === active);

    return (
        <div className="flex flex-col lg:mx-auto mx-8 mt-[140px] items-center">
            <div className="flex flex-col text-center max-w-[540px]">
                <h1 className="featuresTitle">Features</h1>
                <p className="paraMobile leading-[25px]">
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </p>
            </div>

            <div className=" mt-10 flex flex-col items-center">
                <div className="flex flex-col md:flex-row w-full md:max-w-[730px]">
                    {features.map((feature) => (
                        <p
                            key={feature.name}
                            className={`md:flex-1 relative flex flex-col items-center justify-center border-t-[1px] md:border-t-0 md:border-b-[1px] h-[60px] border-[#495DCF] border-opacity-20 featuresOptiones ${
                                feature.name === "Easy Sharing"
                                    ? "border-b-[1px]"
                                    : ""
                            } ${active === feature.name ? "opacity-100" : ""}`}
                            onClick={() => setActive(feature.name)}
                        >
                            {feature.name}
                            <span
                                className={`absolute bottom-0 w-[144px] md:w-full ${
                                    active === feature.name
                                        ? "h-[4px] bg-red"
                                        : "hidden"
                                }`}
                            ></span>
                        </p>
                    ))}
                </div>
                <div className="mt-[72px] flex flex-col itmes-center relative md:flex-row max-w-[1104px] md:gap-[125px]">
                    <div className="md:flex-1 md:relative">
                        <img
                            src={activeFeature.image}
                            alt={activeFeature.name}
                            className="mb-[70px] md:mb-0 w-full"
                        />
                        <div className="absolute top-[40px] right-[35px] md:top-[80px] md:right-[150px] -z-10  scale-1 sm:scale-125">
                            <Blob />
                        </div>
                    </div>
                    <div className="md:flex-1 flex flex-col justify-center">
                        <h1 className="featuresTitle text-center md:text-start">
                            {activeFeature.title}
                        </h1>
                        <p className="paraMobile leading-[25px] md:text-start">
                            {activeFeature.para}
                        </p>

                        <button className="h-12 bg-blue text-white buttonText rounded-[5px] min-w-[114px] mt-8 mx-auto md:mx-0 max-w-[114px]">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
