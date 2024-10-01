import React from "react";
import logo from "../shared/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isSlidesPage = location.pathname === "/Slides";

    const handleSlideShow = () => {
        if (isSlidesPage) {
            navigate("/");
        } else {
            navigate("/Slides", { state: { startIndex: 0 } });
        }
    };

    return (
        <div className="w-full flex justify-between items-center border-b-[1px] border-[#E5E5E5] h-[79px] md:h-[88px] xl:h-[128px] p-6 md:px-10 md:py-[28px] xl:p-0 xl:mx-auto xl:max-w-[1360px]">
            <img src={logo} alt="logo" className="h-8 xl:h-12" />
            <button
                className="slideShow md:slideShowTablet"
                onClick={handleSlideShow}
            >
                {isSlidesPage ? "STOP SLIDESHOW" : "START SLIDESHOW"}
            </button>
        </div>
    );
};

export default Navbar;
