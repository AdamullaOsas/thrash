import React, { useState, useEffect } from "react";

function CircularTimer({ totalTime, font, color }) {
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        setTimeLeft(totalTime);
        setIsPaused(false);
    }, [totalTime]);

    const colorMap = {
        red: "#F87070",
        cyan: "#70F3F8",
        purple: "#D881F8",
    };

    const strokeColor = colorMap[color] || "#3b82f6";

    const fontMap = {
        "Kumbh Sans": "'Kumbh Sans', sans-serif",
        "Roboto Slab": "'Roboto Slab', serif",
        "Space Mono": "'Space Mono', monospace",
    };

    const timerClassMap = {
        "Kumbh Sans": "timeKumbh",
        "Roboto Slab": "timeRoboto",
        "Space Mono": "timeSpace",
    };

    const timerStyle = {
        fontFamily: fontMap[font] || "sans-serif",
    };

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (!isPaused && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isPaused, timeLeft]);

    const strokeDashoffset =
        circumference - (timeLeft / totalTime) * circumference;

    return (
        <div className="flex justify-center items-center ">
            <div
                className="relative w-[300px] h-[300px] bg-gradient-to-br from-[#0E112A] to-[#2E325A] rounded-full flex items-center justify-center"
                style={{ boxShadow: "-50px -50px 100px 0 #272C5A" }}
            >
                <div className="size-[267.8px] bg-darkBlue top-0 left-0 rounded-full">
                    <svg
                        className="absolute top-0 left-0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 120"
                    >
                        <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke="#161932"
                            strokeWidth="4"
                            fill="none"
                        />
                    </svg>

                    <svg
                        className="absolute top-0 left-0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 120"
                    >
                        <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke={strokeColor}
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-stroke-dashoffset duration-1000 ease-linear"
                            style={{
                                transform: "rotate(-90deg)",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </svg>
                </div>

                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-almostWhite"
                    style={timerStyle}
                >
                    <div className={timerClassMap[font]}>
                        {formatTime(timeLeft)}
                    </div>
                    <button
                        className="pause max-w-[98px]"
                        onClick={() => setIsPaused(!isPaused)}
                        style={timerStyle}
                    >
                        {isPaused ? "Resume" : "Pause"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
        .toString()
        .padStart(2, "0")}`;
}

export default CircularTimer;
