import React from "react";

import logo from "../images/logo-bookmark.svg";

const Navbar = () => {
    const links = ["Features", "Pricing", "Contact"];

    return (
        <div className="max-w-[1104px] mx-8 xl:mx-auto xl:w-full mt-10 flex justify-between items-center">
            <img src={logo} alt="logo" />

            <div className="flex items-center">
                <div className="flex gap-12 items-center">
                    {links.map((link) => (
                        <a
                            key={link}
                            href="/"
                            className="navLinkDesktop hover:cursor-pointer hover:text-red"
                        >
                            {link}
                        </a>
                    ))}
                    <button className="w-[107px] h-[38px] bg-red border-[2px] hover:bg-white hover:text-red border-red rounded-[5px] navLinkDesktop text-white font-medium flex items-center justify-center">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
