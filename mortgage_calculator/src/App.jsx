import React from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

const App = () => {
    return (
        <div className="min-h-screen w-full bg-slate-100 sm:flex sm:items-center sm:justify-center">
            <div className="bg-white max-w-[1008px] flex flex-col sm:flex-row">
                <Calculator />
                <Result />
            </div>
        </div>
    );
};

export default App;
