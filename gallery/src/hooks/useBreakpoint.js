import { useState, useEffect } from "react";

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState("phone");

    useEffect(() => {
        const calcBreakpoint = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setBreakpoint("desktop");
            } else if (width >= 768) {
                setBreakpoint("tablet");
            } else {
                setBreakpoint("phone");
            }
        };

        calcBreakpoint();

        window.addEventListener("resize", calcBreakpoint);

        return () => window.removeEventListener("resize", calcBreakpoint);
    }, []);

    return breakpoint;
}

export default useBreakpoint;
