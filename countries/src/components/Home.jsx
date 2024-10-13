import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import Card from "./Card";
import data from "../data/data.json";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    const filteredData = data.filter((country) => {
        const matchesSearch = country.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesRegion = selectedRegion
            ? country.region === selectedRegion
            : true;
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="bg-[#FAFAFA] dark:bg-[#202C36] px-4 py-6 min-h-screen">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:px-[62px]">
                <Search setSearchTerm={setSearchTerm} />
                <Filter
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                />
            </div>
            <div className="px-10 flex flex-wrap gap-10 sm:gap-[75px] mt-8 justify-center ">
                {filteredData.map((country) => (
                    <Card key={country.name} country={country} />
                ))}
            </div>
        </div>
    );
};

export default Home;
