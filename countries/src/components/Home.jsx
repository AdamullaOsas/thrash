import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import Card from "./Card";

import data from "../data/data.json";

const Home = () => {
    return (
        <div className="bg-[#FAFAFA] dark:bg-[#202C36] px-4 py-6 min-h-screen">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:px-[62px]">
                <Search />
                <Filter />
            </div>
            <div className="px-10 flex flex-wrap gap-10 sm:gap-[75px] mt-8 justify-center ">
                {data.map((country, index) => (
                    <Card index={index} key={country.name} />
                ))}
            </div>
        </div>
    );
};

export default Home;
