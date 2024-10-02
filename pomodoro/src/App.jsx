import React, { useState, useEffect } from "react";

function CircularTimer({ totalTime }) {
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const strokeDashoffset =
        circumference - (timeLeft / totalTime) * circumference;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-32 h-32">
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
                        stroke="#e5e7eb"
                        strokeWidth="10"
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
                        stroke="#3b82f6"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-stroke-dashoffset duration-1000 ease-linear"
                    />
                </svg>

                <div className="absolute inset-0 flex justify-center items-center text-2xl font-semibold text-gray-700">
                    {timeLeft}s
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <CircularTimer totalTime={60} /> {/* 60 seconds timer */}
        </div>
    );
}
