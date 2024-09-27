import React, { useState } from "react";

import logo from "../images/logo-bookmark.svg";
import logoOpen from "../images/logo-bookmark-open.svg";
import burgir from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const links = ["Features", "Pricing", "Contact"];

    return (
        <div className="max-w-[1104px] mx-8 xl:mx-auto xl:w-full mt-10 flex justify-between items-center">
            <img src={logo} alt="logo" className={`${open ? "hidden" : ""}`} />
            <img
                src={burgir}
                alt="burgir"
                className={`w-[18px] h-[15px] cursor-pointer ${
                    open ? "hidden" : ""
                }`}
                onClick={() => setOpen(true)}
            />
            <div
                className={`fixed top-0 left-0 w-full h-full bg-navy opacity-95 transform z-10 ${
                    open ? "translate-y-0" : "-translate-y-full"
                } transition-transform duration-500 ease-in-out`}
            >
                <div className="mx-8 mt-10 flex justify-between items-center">
                    <img src={logoOpen} alt="logo" />
                    <img
                        src={close}
                        alt="close"
                        onClick={() => setOpen(false)}
                        className="w-[18px] h-[18px] cursor-pointer"
                    />
                </div>
                <div className="mx-8 mt-10 flex flex-col">
                    {links.map((link) => (
                        <a
                            key={link}
                            href="/"
                            className={`flex items-center justify-center border-t-[1px] py-6 border-white border-opacity-15 text-white navLink ${
                                link === "Contact" ? "border-b-[1px]" : ""
                            }`}
                        >
                            {link}
                        </a>
                    ))}

                    <button className="mt-6 h-12 rounded-[5px] border-[2px] navLink font-medium text-white border-white">
                        Login
                    </button>
                    <div className="flex justify-center space-x-10 absolute bottom-10 left-0 right-0">
                        <img
                            src={facebook}
                            alt="facebook"
                            className="w-6 h-6"
                        />
                        <img src={twitter} alt="twitter" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
