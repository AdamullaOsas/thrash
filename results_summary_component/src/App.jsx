import React from "react";
import First from "./components/First";
import Last from "./components/Last";

const App = () => {
    return (
        <div className="w-full min-h-screen sm:bg-[#ECF2FF] sm:flex sm:items-center sm:justify-center">
            <div className="max-w-[736px] flex flex-col sm:flex-row sm:justify-center sm:items-center bg-white sm:h-full sm:gap-10 sm:rounded-[32px]">
                <First />
                <Last />
            </div>
        </div>
    );
};

export default App;
