import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ country }) => {
    const { flags, name, population, region, capital } = country;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/${name}`);
    };

    return (
        <div
            onClick={handleNavigation}
            className="w-64 bg-white dark:bg-[#2B3844] rounded-[5px] shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-200"
        >
            <img
                src={flags.svg}
                alt={`${name} flag`}
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold dark:text-white mb-4">
                    {name}
                </h2>
                <p className="text-sm mb-2 dark:text-white">
                    <span className="font-semibold">Population:</span>{" "}
                    {population.toLocaleString()}
                </p>
                <p className="text-sm mb-2 dark:text-white">
                    <span className="font-semibold">Region:</span> {region}
                </p>
                <p className="text-sm dark:text-white">
                    <span className="font-semibold">Capital:</span> {capital}
                </p>
            </div>
        </div>
    );
};

export default Card;
