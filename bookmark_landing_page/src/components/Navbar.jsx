import React, { useState } from "react";

import logo from "../images/logo-bookmark.svg";
import logoOpen from "../images/logo-bookmark-open.svg";

import close from "../images/icon-close.svg";

const Navbar = () => {
    const links = ["Features", "Pricing", "Contact"];

    return (
        <div className="max-w-[1104px] mx-8 xl:mx-auto xl:w-full mt-10 flex justify-between items-center">
            <img src={logo} alt="logo" />

            <div className="flex items-center">
                <div className="flex gap-12 items-center">
                    {links.map((link) => (
                        <a key={link} href="/" className="navLinkDesktop ">
                            {link}
                        </a>
                    ))}
                    <button className="w-[111px] h-[40px] bg-red rounded-[5px] navLinkDesktop text-white font-medium flex items-center justify-center">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
