import { useRef, useEffect, useCallback } from "react";

const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min;

const useRandomInterval = (
    callback: Function,
    minDelay: number,
    maxDelay: number
) => {
    const timeoutId = useRef<number | null>(null);
    const savedCallback = useRef<Function | null>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let isEnabled =
            typeof minDelay === "number" && typeof maxDelay === "number";
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current && savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => {
            typeof timeoutId.current === "number" &&
                window.clearTimeout(timeoutId.current);
        };
    }, [minDelay, maxDelay]);

    const cancel = useCallback(function () {
        typeof timeoutId.current === "number" &&
            window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};

export default useRandomInterval;
