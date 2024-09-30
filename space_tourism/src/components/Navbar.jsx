import React, { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const width = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        {
            ref: "/",
            number: "00",
            title: "HOME",
        },
        {
            ref: "/destination",
            number: "01",
            title: "DESTINATION",
        },
        {
            ref: "/crew",
            number: "02",
            title: "CREW",
        },
        {
            ref: "/technology",
            number: "03",
            title: "TECHNOLOGY",
        },
    ];

    const isSmall = width < 768;
    const isLarge = width >= 1280;

    return (
        <div className="fixed top-0 left-0 h-[88px] md:h-[96px] w-full flex items-center justify-between px-6 md:pl-10 md:pr-0 xl:mt-10 z-50">
            <div className="flex items-center relative">
                <img
                    src={logo}
                    alt="logo"
                    className="size-10 md:size-12 md:mr-10"
                />
                {isLarge && (
                    <div className="h-[1px] flex-grow bg-white w-[570px] absolute top-1/2 bg-opacity-25 left-[calc(100%+10px)] z-10"></div>
                )}
            </div>

            {/* Mobile Menu */}
            <div className={`${isSmall ? "block" : "hidden"}`}>
                <img
                    src={hamburger}
                    alt="hamburger"
                    className={`h-[21px] w-6`}
                    onClick={() => setIsMenuOpen(true)}
                />

                {isMenuOpen && (
                    <div className="fixed h-full w-[70%] top-0 right-0 bg-[#0B0D17] bg-opacity-15 backdrop-blur-xl flex flex-col gap-12 z-50">
                        <div className="self-end">
                            <img
                                src={close}
                                alt="close"
                                className="my-8 mr-6"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>
                        <div className="flex flex-col ml-8 gap-8 h-[20px]">
                            {links.map((link) => (
                                <NavLink
                                    to={link.ref}
                                    key={link.ref}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex w-full items-center gap-3 ${
                                            isActive
                                                ? "border-r-[3px] border-white h-full"
                                                : "hover:border-r-[3px] hover:border-white hover:border-opacity-50 h-full"
                                        }`
                                    }
                                >
                                    <span className="textPreset8 font-bold">
                                        {link.number}
                                    </span>
                                    <p className="textPreset8">{link.title}</p>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Menu */}
            <div
                className={`${
                    isSmall ? "hidden" : "block"
                } bg-white bg-opacity-5 backdrop-blur-lg h-full w-full max-w-[736px] flex items-center gap-12 pr-10 xl:pr-16 justify-end relative z-0`}
            >
                {links.map((link) => (
                    <NavLink
                        to={link.ref}
                        key={link.ref}
                        className={({ isActive }) =>
                            `flex h-full items-center gap-3 ${
                                isActive
                                    ? "border-b-[3px] border-white"
                                    : "hover:border-b-[3px] hover:border-white hover:border-opacity-50"
                            }`
                        }
                    >
                        <span className="textPreset8 font-bold">
                            {link.number}
                        </span>
                        <p className="textPreset8">{link.title}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
