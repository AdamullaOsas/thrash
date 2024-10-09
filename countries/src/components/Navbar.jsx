import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className="w-full h-20 px-4 flex items-center justify-between shadow-md bg-white dark:bg-[#2B3844] dark:text-white lg:px-20">
            <h1 className="mainMobile dark:text-white lg:text-[24px]">
                Where in the world?
            </h1>
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleDarkMode}
            >
                <img
                    src="/moon.svg"
                    alt="icon"
                    className="size-4 dark:bg-darkBlue"
                />
                <p className="modeMobile dark:text-white lg:text-[16px]">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </p>
            </div>
        </div>
    );
};

export default Navbar;
