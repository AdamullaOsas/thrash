import { useState, useEffect, useCallback } from "react";

const useWindowWidth = () => {
    const isClient = typeof window === "object";

    const getWidth = useCallback(
        () => (isClient ? window.innerWidth : undefined),
        [isClient]
    );

    const [windowWidth, setWindowWidth] = useState(getWidth);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowWidth(getWidth());
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [getWidth, isClient]);

    return windowWidth;
};

export default useWindowWidth;
