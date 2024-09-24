import React from "react";

const Blob = () => {
    return (
        <div
            style={{
                width: "clamp(577px, 50vw, 1000px)",
                height: "clamp(203px, 20vw, 352px)",
                borderRadius: "316px",
            }}
            className="max-w-screen bg-blue"
        ></div>
    );
};

export default Blob;
