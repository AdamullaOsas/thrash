import React from "react";
import { useLocation } from "react-router-dom";

const Single = () => {
    const location = useLocation();
    const { theme, gridSize } = location.state;
    return (
        <div>
            {theme}
            {gridSize}
        </div>
    );
};

export default Single;
