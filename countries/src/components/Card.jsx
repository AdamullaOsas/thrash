import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Card = ({ index, countryName }) => {
    const { flag, name, population, region, capital } = data[index];
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/${countryName}`);
    };

    return (
        <div
            onClick={handleNavigation}
            className="w-64 bg-white dark:bg-[#2B3844] rounded-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.0562)] overflow-hidden cursor-pointer hover:scale-105 transform transition duration-200"
        >
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
