import React from "react";

import dots from "../images/bg-dots.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

const Extension = () => {
    const cards = [
        { image: chrome, title: "Add to Chrome", para: "Minimum version 62" },
        { image: firefox, title: "Add to Firefox", para: "Minimum version 55" },
        { image: opera, title: "Add to Opera", para: "Minimum version 46" },
    ];

    return (
        <div className="mt-[77px] mx-8 flex flex-col items-center">
            <div className="flex flex-col text-center">
                <h1 className="featuresTitle">Download the extension</h1>
                <p className="paraMobile leading-[25px]">
                    We've got more browsers in the pipeline. Please do let us
                    know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>
            <div className="flex flex-col gap-10">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ image, title, para }) => {
    return (
        <div className="w-[280px] h-[371px] shadow-xl flex flex-col items-center rounded-[15px]">
            <img src={image} alt={title} className="mt-[50px]" />
            <h1 className="cardTitle mt-8">{title}</h1>
            <p className="cardPara mt-[6px]">{para}</p>

            <img src={dots} alt="dots" className="mt-8" />

            <div className="w-full p-6">
                <button className="w-full h-12 bg-blue buttonText text-white rounded-[5px]">
                    Add & Install Extension
                </button>
            </div>
        </div>
    );
};

export default Extension;
