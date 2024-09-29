import React from "react";

import member1 from "../assets/crew/image-douglas-hurley.webp";
import member2 from "../assets/crew/image-mark-shuttleworth.webp";
import member3 from "../assets/crew/image-victor-glover.webp";
import member4 from "../assets/crew/image-anousheh-ansari.webp";

const Crew = () => {
    const members = [member1, member2, member3, member4];
    return (
        <div className="min-h-screen w-full flex flex-col items-center max-w-[1110px] xl:mx-auto p-6 md:p-10 xl:p-0 xl:py-12 pt-[112px] md:pt-[128px] xl:pt-[184px]">
            Crew
        </div>
    );
};

export default Crew;
