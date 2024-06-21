import { MutableRefObject, useEffect } from 'react';

export interface UseIntersectionObserverOptions {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement | null>;
    wrapperRef: MutableRefObject<HTMLElement | null>;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions) {
    const { callback, triggerRef, wrapperRef } = options;

    useEffect(() => {
        const wrapperElement = wrapperRef?.current;
        const triggerElement = triggerRef.current;

        const options: IntersectionObserverInit = {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        if (triggerElement) {
            observer.observe(triggerElement);
        }

        return () => {
            if (triggerElement) {
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
