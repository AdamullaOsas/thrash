import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-20 px-4 flex items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h1 className="mainMobile">Where in the world?</h1>
            <div className="flex items-center gap-2">
                <img src="/moon.svg" alt="icon" className="size-4" />
                <p className="modeMobile">Dark mode</p>
            </div>
        </div>
    );
};

export default Navbar;
