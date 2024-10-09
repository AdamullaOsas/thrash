import React from "react";
import data from "../data/data.json";

const Card = ({ index }) => {
    const { flag, name, population, region, capital } = data[index];

    return (
        <div className="w-64 bg-white dark:bg-[#2B3844] rounded-[5px] shadow-md overflow-hidden">
            <img
                src={flag}
                alt={`${name} flag`}
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h2 className="cardName dark:text-white mb-4">{name}</h2>
                <p className="cardP mb-2 dark:text-white font-[200]">
                    <span className="cardP dark:text-white">Population:</span>{" "}
                    {population.toLocaleString()}
                </p>
                <p className="cardP mb-2 dark:text-white font-[200]">
                    <span className=" cardP dark:text-white">Region:</span>{" "}
                    {region}
                </p>
                <p className="cardP dark:text-white font-[200]">
                    <span className=" cardP dark:text-white">Capital:</span>{" "}
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default Card;
