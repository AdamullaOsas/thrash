import React, { useState } from "react";
import close from "../assets/icon-close.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import check from "../assets/check.svg";

const Modal = ({ settings, onClose, onSave }) => {
    const [localSettings, setLocalSettings] = useState(settings);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalSettings({
            ...localSettings,
            [name]: value,
        });
    };

    const handleFontChange = (font) => {
        setLocalSettings({
            ...localSettings,
            font: font,
        });
    };

    const handleColorChange = (color) => {
        setLocalSettings({
            ...localSettings,
            color: color,
        });
    };

    const handleSave = () => {
        onSave(localSettings);
        onClose();
    };

    const inputs = [
        { title: "Pomodoro", value: localSettings.pomodoro, name: "pomodoro" },
        {
            title: "Short Break",
            value: localSettings.shortBreak,
            name: "shortBreak",
        },
        {
            title: "Long Break",
            value: localSettings.longBreak,
            name: "longBreak",
        },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0A0C1C] bg-opacity-50">
            <div className="bg-white py-6 rounded-[15px] w-full max-w-[327px] relative">
                <div className="w-full border-b-[1px] border-[#E3E1E1] px-6 pb-6 flex justify-between items-center">
                    <h1 className="settings text-darkBlue">Settings</h1>
                    <img
                        src={close}
                        alt="close"
                        className=""
                        onClick={onClose}
                    />
                </div>
                <div className="px-6">
                    <div className="py-6 border-b-[1px] border-[#E3E1E1]">
                        <p className="timeSettings text-darkBlue text-center mb-4">
                            TIME (MINUTES)
                        </p>
                        <div className="flex flex-col gap-2">
                            {inputs.map((input, index) => (
                                <div
                                    className="flex items-center justify-between relative"
                                    key={index}
                                >
                                    <label className="labelInput">
                                        {input.title}
                                    </label>
                                    <input
                                        type="text"
                                        name={input.name}
                                        value={input.value}
                                        onChange={handleInputChange}
                                        className="w-[140px] h-10 outline-none bg-almostWhite rounded-[10px] px-4 py-3 inputText"
                                    />
                                    <div className="flex flex-col gap-2 absolute right-4">
                                        <button>
                                            <img
                                                src={arrowUp}
                                                alt="arrow up"
                                                onClick={() =>
                                                    setLocalSettings(
                                                        (prevSettings) => ({
                                                            ...prevSettings,
                                                            [input.name]:
                                                                Math.max(
                                                                    1,
                                                                    prevSettings[
                                                                        input
                                                                            .name
                                                                    ] - 1
                                                                ),
                                                        })
                                                    )
                                                }
                                            />
                                        </button>
                                        <button>
                                            <img
                                                src={arrowDown}
                                                alt="arrow down"
                                                onClick={() =>
                                                    setLocalSettings(
                                                        (prevSettings) => ({
                                                            ...prevSettings,
                                                            [input.name]:
                                                                prevSettings[
                                                                    input.name
                                                                ] + 1,
                                                        })
                                                    )
                                                }
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="py-6 border-b-[1px] border-[#E3E1E1] flex items-center flex-col">
                        <p className="timeSettings text-darkBlue text-center mb-4">
                            FONT
                        </p>

                        <div className="flex gap-4">
                            {["Kumbh Sans", "Roboto Slab", "Space Mono"].map(
                                (font) => (
                                    <button
                                        key={font}
                                        onClick={() => handleFontChange(font)}
                                        className={`rounded-full size-10 flex items-center justify-center px-4 py-2 ${
                                            localSettings.font === font
                                                ? "bg-darkBlue text-almostWhite"
                                                : "bg-[#EFF1FA] text-darkBlue"
                                        }`}
                                        style={
                                            ({ fontFamily: font },
                                            { fontWeight: "bold" })
                                        }
                                    >
                                        Aa
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <div className="py-6 flex items-center flex-col">
                        <p className="timeSettings text-darkBlue text-center mb-4">
                            COLOR
                        </p>
                        <div className="flex space-x-4">
                            {["red", "cyan", "purple"].map((color) => (
                                <button
                                    className={`size-10 rounded-full bg-${color} flex items-center justify-center`}
                                    onClick={() => handleColorChange(color)}
                                >
                                    <img
                                        src={check}
                                        alt="check"
                                        className={`${
                                            color === localSettings.color
                                                ? ""
                                                : "hidden"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="absolute z-10 bottom-[-27px] left-1/2 translate-x-[-50%]">
                        <button
                            className="w-[140px] h-[53px] bg-red rounded-[26.5px] apply"
                            onClick={handleSave}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
