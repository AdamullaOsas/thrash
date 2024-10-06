import React from "react";

const First = () => {
    return (
        <div className="w-full h-[356px] bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] pt-6 sm:pt-[38px] flex flex-col items-center gap-6 rounded-b-[32px] sm:w-[368px] sm:rounded-t-[32px] sm:h-[512px]">
            <p className="yourResult sm:text-[24px]">Your Result</p>
            <div className="size-[140px] sm:size-[200px] bg-gradient-to-b from-[#4D21C9] to-[#2521C900] rounded-full flex items-center justify-center flex-col">
                <h1 className="bigNumber sm:text-[72px]">76</h1>
                <p className="littleNumber sm:text-[18px]">out of 100</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[260px] gap-2 sm:gap-3">
                <h1 className="great sm:text-[32px]">Great</h1>
                <p className="desc sm:text-[18px]">
                    Your performance exceed 65% of the people conducting the
                    test here!
                </p>
            </div>
        </div>
    );
};

export default First;
