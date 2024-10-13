import React, { useState } from "react";

const Filter = () => {
    const filters = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [openFilters, setOpenFilters] = useState(false);
    return (
        <div className="relative w-52">
            <div
                className="flex justify-between items-center px-6 h-12 bg-white dark:bg-[#2B3844] dark:text-white rounded-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.0562)] cursor-pointer"
                onClick={() => setOpenFilters(!openFilters)}
            >
                <p className="searchMobile dark:text-white ">
                    Filter by Region
                </p>
                <img
                    src="/arrow.svg"
                    alt="icon"
                    className="w-3 h-3 dark:filter dark:brightness-0 dark:invert"
                />
            </div>
            {openFilters && (
                <div className="absolute top-full mt-1 w-full bg-white dark:bg-darkBlue dark:text-white rounded-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.0562)] z-10">
                    {filters.map((filter) => (
                        <p
                            key={filter}
                            className="px-6 py-2 dark:text-white searchMobile cursor-pointer"
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
