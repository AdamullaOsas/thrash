import React from "react";
import data from "../data/data.json";

const Last = () => {
    const colors = [
        "rgba(255, 85, 85, 0.05)",
        "rgba(255, 178, 30, 0.05)",
        "rgba(0, 187, 143, 0.05)",
        "rgba(17, 37, 214, 0.05)",
    ];

    const textColors = ["#FF5555", "#FFB21E", "#00BB8F", "#1125D6"];

    return (
        <div className="flex flex-col sm:p-10 h-[512px] sm:pl-0 sm:w-[368px]">
            <h1 className="summary pl-8 my-6 sm:m-0 sm:p-0 sm:mb-6 sm:text-[24px]">
                Summary
            </h1>

            <div className="flex flex-col px-[30px] sm:px-0 gap-4">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        title={item.category}
                        value={item.score}
                        image={item.icon}
                        color={colors[index]}
                        textColor={textColors[index]}
                    />
                ))}
            </div>
            <button className="mt-6 sm:mt-10 mx-[30px] sm:mx-0 rounded-[128px] h-[56px] bg-[#303b59] continue hover:bg-gradient-to-b hover:from-[#6943FF] hover:to-[#2F2CE9]">
                Continue
            </button>
        </div>
    );
};

const Card = ({ title, value, image, color, textColor }) => {
    return (
        <div
            className="h-[56px] w-full flex justify-between items-center p-4 rounded-[12px] "
            style={{ backgroundColor: color }}
        >
            <div className="flex gap-3 items-center">
                <img src={image} alt={title} className="h-6 w-6" />
                <p className="card sm:text-18px" style={{ color: textColor }}>
                    {title}
                </p>
            </div>
            <p className="text-[#303B59] card font-bold sm:text-[18px]">
                {value} <span className="opacity-50">/ 100</span>
            </p>
        </div>
    );
};

export default Last;
