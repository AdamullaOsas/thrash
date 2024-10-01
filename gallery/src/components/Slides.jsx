import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import view from "../shared/icon-view-image.svg";

const Slides = () => {
    const location = useLocation();
    const { startIndex } = location.state || { startIndex: 0 };
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const nextIndex = () => currentIndex + 1;
    const prevIndex = () => currentIndex - 1;

    const handleNext = () => {
        setCurrentIndex(nextIndex());
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex());
    };

    const item = data[currentIndex];

    return (
        <div className="flex flex-col items-center p-6">
            <div className="image-container relative">
                <img
                    src={item.images.gallery}
                    alt={item.name}
                    className="w-full h-auto"
                />
                <div className="absolute bg-black bg-opacity-75 flex items-center justify-center gap-4 top-4 left-4 w-[152px] h-10">
                    <img src={view} alt="view" className=" size-[12px] " />
                    <p className="viewImage">VIEW IMAGE</p>
                </div>

                <div
                    className="absolute left-0"
                    style={{ top: "calc(100% - 54px)" }}
                >
                    <div className="w-[280px] bg-white p-6 flex flex-col">
                        <h1>{item.name}</h1>
                        <p>{item.artist.name}</p>
                    </div>
                    <img
                        src={item.artist.image}
                        alt={item.name}
                        className="size-16 ml-4"
                    />
                </div>
            </div>

            <div className="controls flex mt-[400px]">
                <button
                    onClick={handlePrev}
                    className="mr-4 px-4 py-2 bg-gray-200 rounded"
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 rounded"
                    disabled={currentIndex === data.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slides;
