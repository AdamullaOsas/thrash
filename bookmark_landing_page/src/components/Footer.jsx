import React from "react";
import logo from "../images/logo-bookmark-footer.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
    const links = ["Features", "Pricing", "Contact"];

    return (
        <div className="w-full h-[88px] bg-navy flex items-center justify-around">
            <div className="flex gap-16">
                <img src={logo} alt="logo" className="h-[25px]" />

                <div className="flex gap-11 items-center">
                    {links.map((link) => (
                        <a key={link} href="/" className="footerLink">
                            {link}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-10 ">
                <a href="/">
                    <img src={facebook} alt="facebook" className="w-6 h-6" />
                </a>
                <a href="/">
                    <img src={twitter} alt="twitter" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
