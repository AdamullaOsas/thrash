import React, { useState } from "react";

import data from "../data/data.json";

import member1 from "../assets/crew/image-douglas-hurley.webp";
import member2 from "../assets/crew/image-mark-shuttleworth.webp";
import member3 from "../assets/crew/image-victor-glover.webp";
import member4 from "../assets/crew/image-anousheh-ansari.webp";

const Crew = () => {
    const { crew } = data;
    const [active, setActive] = useState(0);
    const members = [member1, member2, member3, member4];
    return (
        <div className="min-h-screen w-full flex flex-col items-center xl:items-start max-w-[1110px] xl:mx-auto p-6 md:pb-0 md:p-10 xl:p-0 xl:py-12 pt-[112px] md:pt-[128px] xl:pt-[184px] xl:flex-row xl:max-w-[1110px] xl:justify-between">
            <div className="xl:flex xl:flex-col xl:justify-between xl:h-[630px]">
                <div className="flex gap-6 font-BarlowC text-white md:self-start ">
                    <span className="opacity-25 font-bold textPreset6Mobile md:text-[20px] xl:text-[28px]">
                        02
                    </span>
                    <p className="textPreset6Mobile md:text-[20px] xl:text-[28px]">
                        MEET YOUR CREW
                    </p>
                </div>
                <div className="flex flex-col mt-16 text-center xl:text-start md:max-w-[512px] xl:max-w-[540px]">
                    <div className="flex flex-col gap-2">
                        <p className="textPreset4Mobile md:text-[28px] text-white opacity-50 xl:text-[32px] uppercase">
                            {crew[active].role}
                        </p>
                        <p className="textPreset3Mobile md:text-[40px] text-white xl:text-[56px] uppercase">
                            {crew[active].name}
                        </p>
                    </div>
                    <p className="textPreset9Mobile text-blue-300 md:text-[16px] xl:text-[18px] h-[164px] md:h-[117px]">
                        {crew[active].bio}
                    </p>
                </div>
                <div className="flex gap-4 xl:gap-10 items-center justify-center mt-6 xl:mt-0 xl:mb-12 xl:justify-self-end xl:self-start">
                    {members.map((member, index) => (
                        <button
                            onClick={() => setActive(index)}
                            className={`size-[10px] xl:size-[15px] rounded-full bg-white ${
                                active === index
                                    ? "bg-opacity-100"
                                    : "bg-opacity-[17.44%]"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="px-[28px] py-[5px] md:p-0 ">
                <img
                    src={members[active]}
                    alt="crew member"
                    className="mt-8 h-[340px] md:mx-auto md:h-[560px] xl:h-[600px] xl:mt-0"
                />
            </div>
        </div>
    );
};

export default Crew;
