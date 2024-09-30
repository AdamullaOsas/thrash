import React, { useState } from "react";
import logo from "../shared/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [slideShow, setSlideShow] = useState(false);

    const handleSlideShow = () => {
        if (slideShow) {
            setSlideShow(false);
            navigate("/");
        } else {
            setSlideShow(true);
            navigate("/Slides");
        }
    };

    return (
        <div className="w-full flex justify-between items-center border-b-[1px] border-[#E5E5E5] h-[79px] md:h-[88px] xl:h-[128px] p-6 md:px-10 md:py-[28px] xl:p-0 xl:mx-auto xl:max-w-[1360px]">
            <img src={logo} alt="logo" className="h-8 xl:h-12" />
            <button
                className="slideShow md:slideShowTablet"
                onClick={handleSlideShow}
            >
                {slideShow ? "STOP SLIDESHOW" : "START SLIDESHOW"}
            </button>
        </div>
    );
};

export default Navbar;
