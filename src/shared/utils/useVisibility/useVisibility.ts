import { useCallback, useEffect, useRef, useState } from 'react';

export const ANIMATION_DELAY = 250;

export const useVisibility = (onClose: () => void, timeout: number = ANIMATION_DELAY) => {
    const [isOpened, setIsOpened] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        setIsClosed(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosed(false);
        }, timeout);
    }, [onClose, timeout]);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setIsOpened(true);
        }, 0);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [timeout]);

    return { isClosed, isOpened, closeHandler };
};
