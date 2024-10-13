import React from "react";
import { useLocation } from "react-router-dom";

const Single = () => {
    const location = useLocation();
    const { theme, gridSize } = location.state;

    const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1);

    return (
        <div className="flex flex-col p-6 w-full min-h-screen">
            <div className="flex justify-between items-center mb-20">
                <img src="/logo.svg" alt="" className="w-[92px]" />
                <button className="h-10 w-[78px] bg-[#FDA214] text-[#FCFCFC] rounded-[26px] startButtons">
                    Menu
                </button>
            </div>
            <div
                className={`grid ${
                    gridSize === 4 ? "grid-cols-4" : "grid-cols-6"
                }`}
            >
                {arr.map((item) => (
                    <div>hi</div>
                ))}
            </div>
        </div>
    );
};

export default Single;
