import React from "react";
import logo from "../images/logo-bookmark-footer.svg";

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
const MobileFooter = () => {
    const links = ["Features", "Pricing", "Contact"];

    return (
        <div className="w-full h-[334pz] bg-navy flex flex-col ">
            <img src={logo} alt="logo" className="mx-auto mt-10" />

            <div className="flex flex-col gap-8 mt-10 items-center">
                {links.map((link) => (
                    <a key={link} href="/" className="footerLink">
                        {link}
                    </a>
                ))}
            </div>
            <div className="flex justify-center space-x-10 mt-[48px] mb-[43px]">
                <img src={facebook} alt="facebook" className="w-6 h-6" />
                <img src={twitter} alt="twitter" className="w-6 h-6" />
            </div>
        </div>
    );
};

export default MobileFooter;
