import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const Country = () => {
    const { country } = useParams();
    const countryData = data.find((item) => item.name === country);

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
        borders,
    } = countryData;

    return (
        <div className="bg-[#FAFAFA] dark:bg-[#202C36] px-4 py-6 min-h-screen">
            <button>Go back</button>

            <img src={flag} alt={`${name} flag`} />
            <div>
                <h1>{name}</h1>
                <div>
                    <p>
                        Native Name: <span>{nativeName}</span>
                    </p>
                    <p>
                        Population: <span>{population.toLocaleString()}</span>
                    </p>
                    <p>
                        Region: <span>{region}</span>
                    </p>
                    <p>
                        Sub Region: <span>{subregion}</span>
                    </p>
                    <p>
                        Capital: <span>{capital}</span>
                    </p>
                </div>
                <div>
                    <p>
                        Top Level Domain: <span>{topLevelDomain}</span>
                    </p>
                    <p>
                        Currencies:{" "}
                        <span>
                            {currencies
                                .map((currency) => currency.name)
                                .join(", ")}
                        </span>
                    </p>
                    <p>
                        Languages:{" "}
                        <span>
                            {languages
                                .map((language) => language.name)
                                .join(", ")}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <h1>Border Countries: </h1>
                <div>
                    {borders.length ? (
                        borders.map((border) => (
                            <button key={border}>{border}</button>
                        ))
                    ) : (
                        <span>No border countries</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Country;
