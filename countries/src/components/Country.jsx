import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";

const Country = () => {
    const { country } = useParams();
    const countryData = data.find((item) => item.name === country);
    const navigate = useNavigate();

    if (!countryData) {
        return (
            <div className="text-center text-2xl mt-10">Country not found!</div>
        );
    }

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders = [],
    } = countryData;

    return (
        <div className="bg-[#FAFAFA] dark:bg-[#202C36] p-6 sm:p-20 min-h-screen">
            <button
                className="flex gap-2 h-[32px] w-[104px] bg-white items-center justify-center back rounded-sm mb-16 dark:bg-[#2B3844] dark:text-white"
                style={{
                    boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.2931)",
                }}
                onClick={() => navigate(-1)}
            >
                <img
                    src="/back.svg"
                    alt="arrow"
                    className="dark:filter dark:brightness-0 dark:invert"
                />
                Back
            </button>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <img
                    src={flag}
                    alt={`${name} flag`}
                    className="rounded-[5px] w-full max-w-[320px] h-[229px] object-cover mb-11 md:w-[560px] md:max-w-none md:h-[401px] sm:mb-0"
                />

                <div className="flex flex-col md:max-w-[574px] md:w-full">
                    <h1 className="countryName mb-4 dark:text-white">{name}</h1>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                            <div className="countryP mb-8 ">
                                <p className="dark:text-white">
                                    Native Name:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {nativeName}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Population:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {population.toLocaleString()}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Region:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {region}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Sub Region:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {subregion}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Capital:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {capital}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="countryP mb-8">
                                <p className="dark:text-white">
                                    Top Level Domain:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {topLevelDomain}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Currencies:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {currencies
                                            .map((currency) => currency.name)
                                            .join(", ")}
                                    </span>
                                </p>
                                <p className="dark:text-white">
                                    Languages:{" "}
                                    <span className="dark:text-white font-[200]">
                                        {languages
                                            .map((language) => language.name)
                                            .join(", ")}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <h1 className="borderC dark:text-white">
                            Border Countries:{" "}
                        </h1>
                        <div className="flex gap-[10px] flex-wrap mb-10">
                            {borders.length ? (
                                borders.map((border) => (
                                    <div
                                        key={border}
                                        className="boxBorderC w-24 h-[28px] flex items-center justify-center bg-white rounded-sm dark:text-white dark:bg-[#2B3844]"
                                        style={{
                                            boxShadow:
                                                "0px 0px 4px 0px rgba(0, 0, 0, 0.1031)",
                                        }}
                                    >
                                        {border}
                                    </div>
                                ))
                            ) : (
                                <span>No border countries</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
