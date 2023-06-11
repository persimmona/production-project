import { useCallback, useEffect, useRef, useState } from 'react';

export const ANIMATION_DELAY = 250;

export const useVisibility = (initialValue: boolean, timeout: number = ANIMATION_DELAY) => {
    const [isVisible, setIsVisible] = useState(initialValue);
    const [isMounted, setIsMounted] = useState(initialValue);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        setIsVisible(false);
        timerRef.current = setTimeout(() => {
            setIsMounted(false);
        }, timeout);
    }, [timeout]);

    const openHandler = useCallback(() => {
        setIsMounted(true);
        timerRef.current = setTimeout(() => {
            setIsVisible(true);
        }, 0);
    }, []);

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [closeHandler, timeout]);

    return { isMounted, isVisible, closeHandler, openHandler };
};
