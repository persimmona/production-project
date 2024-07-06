import { useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: unknown[]) => void, delay = 500) => {
    const timer = useRef<NodeJS.Timeout | null>(null);

    return useCallback(
        (...args: unknown[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
