import React, { useState } from "react";
import logo from "./assets/logo.svg";
import settingsIcon from "./assets/icon-settings.svg";

import Modal from "./components/Modal";
import CircularTimer from "./components/CircularTimer";

const App = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        font: "Kumbh Sans",
        color: "red",
    });

    const colorClasses = {
        red: "bg-red",
        cyan: "bg-cyan",
        purple: "bg-purple",
    };

    const [mode, setMode] = useState("pomodoro");

    const handleSettingsChange = (newSettings) => {
        setSettings(newSettings);
    };

    let selectedTime;

    if (mode === "pomodoro") {
        selectedTime = settings.pomodoro * 60;
    } else if (mode === "shortBreak") {
        selectedTime = settings.shortBreak * 60;
    } else if (mode === "longBreak") {
        selectedTime = settings.longBreak * 60;
    }

    return (
        <div className="min-h-screen w-full flex flex-col bg-blue relative">
            <div className="flex flex-col gap-[45px] items-center mt-8 mb-12">
                <img src={logo} alt="logo" className="w-[118px] md:w-[156px]" />
                <div className="flex max-w-[327px] md:max-w-[373px] w-full items-center justify-center h-[63px] rounded-[31.5px] p-2 bg-darkBlue text-grey">
                    <button
                        className={`flex-1 flex items-center justify-center rounded-[26.5px] h-full topDiv md:text-[14px] ${
                            mode === "pomodoro"
                                ? `${colorClasses[settings.color]} text-blue`
                                : ""
                        }`}
                        onClick={() => setMode("pomodoro")}
                        style={{ fontFamily: settings.font }}
                    >
                        pomodoro
                    </button>
                    <button
                        className={`flex-1 flex items-center justify-center rounded-[26.5px] h-full topDiv md:text-[14px] ${
                            mode === "shortBreak"
                                ? `${colorClasses[settings.color]} text-blue`
                                : ""
                        }`}
                        onClick={() => setMode("shortBreak")}
                        style={{ fontFamily: settings.font }}
                    >
                        short break
                    </button>
                    <button
                        className={`flex-1 flex items-center justify-center rounded-[26.5px] h-full topDiv md:text-[14px] ${
                            mode === "longBreak"
                                ? `${colorClasses[settings.color]} text-blue`
                                : ""
                        }`}
                        onClick={() => setMode("longBreak")}
                        style={{ fontFamily: settings.font }}
                    >
                        long break
                    </button>
                </div>
            </div>
            <CircularTimer
                totalTime={selectedTime}
                font={settings.font}
                color={settings.color}
            />

            <img
                src={settingsIcon}
                alt="settings"
                className="absolute bottom-[48px] size-[28px] self-center cursor-pointer"
                onClick={() => setShowSettings(true)}
            />

            {showSettings && (
                <Modal
                    settings={settings}
                    onClose={() => setShowSettings(false)}
                    onSave={handleSettingsChange}
                />
            )}
        </div>
    );
};

export default App;
