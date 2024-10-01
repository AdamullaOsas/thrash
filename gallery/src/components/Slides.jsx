import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import view from "../shared/icon-view-image.svg";
import prev from "../shared/icon-back-button.svg";
import next from "../shared/icon-next-button.svg";

const Slides = () => {
    const location = useLocation();
    const { startIndex } = location.state || { startIndex: 0 };
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const progress = ((currentIndex + 1) / data.length) * 100;

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
        <div className="min-h-screen flex flex-col items-center p-6 relative">
            <div className="relative">
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

            <div className="relative flex flex-col mt-[100px]">
                <div className="absolute right-0 top-[-20px] -z-10">
                    <p className="year">{item.year}</p>
                </div>
                <div className="mt-[54px]">
                    <p className="description">{item.description}</p>
                </div>
                <a href={item.source} className="mt-10 source mb-16">
                    GO TO SOURCE
                </a>
            </div>

            <div className="fixed bottom-0 left-0 flex justify-between items-center w-full h-[72px] py-4 px-6 bg-white ">
                <div
                    className="absolute top-0 left-0 h-[1px] w-full"
                    style={{
                        background: `linear-gradient(to right, black 0%, black ${progress}%, #E5E5E5 ${progress}%, #E5E5E5 100%)`,
                    }}
                ></div>{" "}
                <div className="flex flex-col">
                    <p className="footerName">{item.name}</p>
                    <p className="footerArtist">{item.artist.name}</p>
                </div>
                <div className="flex gap-6">
                    <button
                        className={`h-4 ${
                            currentIndex === 0 ? "disabledButton" : ""
                        }`}
                        disabled={currentIndex === 0}
                        onClick={handlePrev}
                    >
                        <img src={prev} alt="prev" className="h-4" />
                    </button>
                    <button
                        className={`h-4 ${
                            currentIndex === data.length - 1
                                ? "disabledButton"
                                : ""
                        }`}
                        disabled={currentIndex === data.length - 1}
                        onClick={handleNext}
                    >
                        <img src={next} alt="next" className="h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slides;
