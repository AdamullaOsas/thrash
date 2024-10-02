import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import view from "../shared/icon-view-image.svg";
import prev from "../shared/icon-back-button.svg";
import next from "../shared/icon-next-button.svg";
import useBreakpoint from "../hooks/useBreakpoint";

const Slides = () => {
    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();
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
        <div className="min-h-screen xl:min-h-0 flex flex-col lg:flex-row lg:justify-between  items-center md:items-start p-6 relative">
            {isOpen && (
                <div className="min-h-screen w-full fixed flex items-center justify-center top-0 left-0 bg-black bg-opacity-85 z-50">
                    <div className="flex flex-col gap-10">
                        <p
                            className="self-end close"
                            onClick={() => setIsOpen(false)}
                        >
                            CLOSE
                        </p>
                        <img
                            src={item.images.gallery}
                            alt={item.name}
                            className="max-h-[770px] w-auto mx-auto"
                        />
                    </div>
                </div>
            )}

            <div className="relative lg:mt-[30px]">
                <img
                    src={
                        breakpoint === "phone"
                            ? item.images.hero.small
                            : item.images.hero.large
                    }
                    alt={item.name}
                    className="w-full h-auto md:max-w-[475px]"
                />
                <div
                    className="absolute bg-black bg-opacity-75 flex items-center justify-center gap-4 top-4 left-4 md:top-auto md:bottom-4 w-[152px] h-10"
                    onClick={() => setIsOpen(true)}
                >
                    <img src={view} alt="view" className=" size-[12px] " />
                    <p className="viewImage">VIEW IMAGE</p>
                </div>

                <div
                    className="absolute left-0 md:left-[243px] xl:left-[410px] md:top-0"
                    style={
                        breakpoint === "phone"
                            ? { top: "calc(100% - 54px)" }
                            : {}
                    }
                >
                    <div className="w-[280px] md:w-[445px] bg-white p-6 md:p-0 md:pl-[65px] md:pb-[65px] flex flex-col gap-2 md:gap-6 md:relative">
                        <h1 className="slidesTitle md:slidesTitleTablet md:max-w-[350px]">
                            {item.name}
                        </h1>
                        <p className="slidesAuthor">{item.artist.name}</p>
                    </div>
                </div>

                <img
                    src={item.artist.image}
                    alt={item.name}
                    className="size-16 md:size-32 absolute bottom-[-118px] left-1 md:bottom-auto md:top-[238px] md:left-auto md:right-[-158px] lg:top-auto lg:bottom-[-20px]"
                />
            </div>
            <div className="md:w-full lg:max-w-[476px] xl:max-w-[350px] xl:mr-[165px]">
                <div className="relative flex flex-col md:w-full mt-[100px]">
                    <div className="absolute right-0 top-[-20px] -z-10 md:top-[-30px] xl:top-[-50px] md:right-auto md:left-0">
                        <p className="year md:yearTablet">{item.year}</p>
                    </div>
                    <div className="flex flex-col mt-[54px] md:max-w-[457px] md:self-center mb-16 md:mb-28">
                        <p className="description">{item.description}</p>
                        <a href={item.source} className="mt-10 xl:mt-20 source">
                            GO TO SOURCE
                        </a>
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 flex justify-between items-center w-full h-[72px] md:h-24 py-4 px-6 md:px-10 md:py-6 bg-white ">
                    <div
                        className="absolute top-0 left-0 h-[1px] w-full"
                        style={{
                            background: `linear-gradient(to right, black 0%, black ${progress}%, #E5E5E5 ${progress}%, #E5E5E5 100%)`,
                        }}
                    ></div>
                    <div className="flex flex-col">
                        <p className="footerName md:text-[18px]">{item.name}</p>
                        <p className="footerArtist md:text-[13px]">
                            {item.artist.name}
                        </p>
                    </div>
                    <div className="flex gap-6 md:gap-10">
                        <button
                            className={`h-4 md:h-6 ${
                                currentIndex === 0 ? "disabledButton" : ""
                            }`}
                            disabled={currentIndex === 0}
                            onClick={handlePrev}
                        >
                            <img src={prev} alt="prev" className="h-4 md:h-6" />
                        </button>
                        <button
                            className={`h-4 md:h-6 ${
                                currentIndex === data.length - 1
                                    ? "disabledButton"
                                    : ""
                            }`}
                            disabled={currentIndex === data.length - 1}
                            onClick={handleNext}
                        >
                            <img src={next} alt="next" className="h-4 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;
