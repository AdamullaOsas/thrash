import React from "react";
import image from "../images/illustration-hero.svg";
import Blob from "./Blob";

const BookmarkManager = () => {
    return (
        <div className="mt-20 lg:mx-auto mx-8 flex flex-col lg:gap-5 md:flex-row-reverse justify-end ">
            <div className="flex justify-end relative">
                <img src={image} alt="" className="" />

                <div className="absolute left-[70px] top-[60px] sm:left-[180px] sm:top-[200px] -z-10  scale-1 sm:scale-125">
                    <Blob />
                </div>
            </div>
            <div className="flex flex-col max-w-[540px] justify-center">
                <h1 className="titleMobile lg:titleDesktop">
                    A Simple Bookmark Manager
                </h1>
                <p className="paraMobile lg:paraDesktop">
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <div className="flex gap-3 mt-8 items-center justify-center lg:justify-start">
                    <button className="flex-1 h-11 bg-blue text-white buttonText rounded-[5px] max-w-[166px] border-[2px] border-blue hover:bg-white hover:text-blue">
                        Get it on Chrome
                    </button>
                    <button className="flex-1 h-11 bg-[#F7F7F7] text-navy buttonText rounded-[5px] max-w-[166px] border-[2px] border-[#F7F7F7] hover:bg-white hover:text-navy hover:border-navy">
                        Get it on Firefox
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookmarkManager;
