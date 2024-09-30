import React, { useState } from "react";

import data from "../data/data.json";

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-6">
            {data.map((item, index) => (
                <div key={index} className="relative">
                    <img
                        src={item.images.thumbnail}
                        alt={item.title}
                        className="w-full h-full" //TODO: CHANGE IT TO BGIMAGE!!!
                    />
                    <div className="absolute bottom-8 left-8 flex flex-col text-white max-w-[246px]">
                        <h1 className="homeTitle">{item.name}</h1>
                        <p className="homeAuthor">{item.artist.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
