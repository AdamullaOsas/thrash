import React from "react";
import { useState } from "react";

const Home = () => {
    const [theme, setTheme] = useState("numbers");
    const [players, setPlayers] = useState(1);
    const [gridSize, setGridSize] = useState(4);

    return (
        <div className="w-full min-h-screen bg-[#152938] flex flex-col items-center justify-center gap-12 p-6 sm:p-14">
            <img
                src="/logo.svg"
                alt="Memory"
                className="filter invert brightness-0"
            />
            <div className="w-full bg-[#FCFCFC] rounded-[10px] sm:rounded-[20px] p-6 flex flex-col gap-6 sm:p-14 sm:max-w-[654px]">
                <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="labelP text-[#7191A5] sm:text-[20px]">
                        Select Theme
                    </p>
                    <div className="flex gap-3 w-full sm:gap-[30px]">
                        <button
                            className={`w-full h-10 rounded-[26px] text-[#FCFCFC] startButtons sm:text-[26px] sm:h-[52px] ${
                                theme === "numbers"
                                    ? "bg-[#304859]"
                                    : "bg-[#BCCED9] hover:bg-[#6395B8]"
                            }`}
                            onClick={() => setTheme("numbers")}
                        >
                            Numbers
                        </button>
                        <button
                            className={`w-full h-10 rounded-[26px] text-[#FCFCFC] startButtons sm:text-[26px] sm:h-[52px] ${
                                theme === "icons"
                                    ? "bg-[#304859]"
                                    : "bg-[#BCCED9] hover:bg-[#6395B8]"
                            }`}
                            onClick={() => setTheme("icons")}
                        >
                            Icons
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="labelP text-[#7191A5] sm:text-[20px]">
                        Number of Players
                    </p>
                    <div className="flex gap-[10px] sm:gap-[20px]">
                        {[1, 2, 3, 4].map((num) => (
                            <button
                                key={num}
                                className={`w-full h-10 rounded-[26px] text-[#FCFCFC] startButtons sm:text-[26px] sm:h-[52px]  ${
                                    num === players
                                        ? "bg-[#304859]"
                                        : "bg-[#BCCED9] hover:bg-[#6395B8]"
                                }`}
                                onClick={() => setPlayers(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="labelP text-[#7191A5] sm:text-[20px]">
                        Grid Size
                    </p>
                    <div className="flex gap-3 sm:gap-[30px]">
                        <button
                            className={`w-full h-10 rounded-[26px] text-[#FCFCFC] startButtons sm:text-[26px] sm:h-[52px]  ${
                                gridSize === 4
                                    ? "bg-[#304859]"
                                    : "bg-[#BCCED9] hover:bg-[#6395B8]"
                            }`}
                            onClick={() => setGridSize(4)}
                        >
                            4x4
                        </button>
                        <button
                            className={`w-full h-10 rounded-[26px] text-[#FCFCFC] startButtons sm:text-[26px] sm:h-[52px]  ${
                                gridSize === 6
                                    ? "bg-[#304859]"
                                    : "bg-[#BCCED9] hover:bg-[#6395B8]"
                            }`}
                            onClick={() => setGridSize(6)}
                        >
                            6x6
                        </button>
                    </div>
                </div>
                <button className="startButtons text-[#FCFCFC] bg-[#FDA214] hover:bg-[#FFB84A] rounded-[26px] h-12 sm:text-[32px] sm:h-[70px] sm:rounded-[35px] mt-2">
                    Start Game
                </button>
            </div>
        </div>
    );
};

export default Home;
