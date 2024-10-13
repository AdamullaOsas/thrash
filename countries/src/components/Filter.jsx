import React, { useState } from "react";

const Filter = ({ selectedRegion, setSelectedRegion }) => {
    const filters = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [openFilters, setOpenFilters] = useState(false);

    const displayText = selectedRegion || "Filter by Region";

    return (
        <div className="relative w-52">
            <div
                className="flex justify-between items-center px-6 h-12 bg-white dark:bg-[#2B3844] dark:text-white rounded shadow-md cursor-pointer"
                onClick={() => setOpenFilters(!openFilters)}
            >
                <p className="dark:text-white">{displayText}</p>
                <img
                    src="/arrow.svg"
                    alt="icon"
                    className="w-3 h-3 dark:filter dark:brightness-0 dark:invert"
                />
            </div>
            {openFilters && (
                <div className="absolute top-full mt-1 w-full bg-white dark:bg-darkBlue dark:text-white rounded shadow-md z-10">
                    {filters.map((filter) => (
                        <p
                            key={filter}
                            className="px-6 py-2 dark:text-white cursor-pointer"
                            onClick={() => {
                                setSelectedRegion(
                                    filter === "All" ? "" : filter
                                );
                                setOpenFilters(false);
                            }}
                        >
                            {filter}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Filter;
