import React from "react";

const Search = () => {
    return (
        <div className="w-full h-12 bg-white dark:bg-[#2B3844] px-8 py-4 flex items-center gap-6 rounded shadow-[0_2px_4px_rgba(0,0,0,0.0562)] sm:max-w-[480px]">
            <img src="/loop.svg" alt="icon" className="w-5 h-5" />
            <input
                type="text"
                placeholder="Search for a country..."
                className="w-full outline-none bg-transparent dark:text-white placeholder-gray-400 dark:placeholder-white searchMobile"
            />
        </div>
    );
};

export default Search;
