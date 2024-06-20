import { MutableRefObject, useEffect } from 'react';

export interface UseIntersectionObserverOptions {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions) {
    const { callback, triggerRef, wrapperRef } = options;

    useEffect(() => {
        const wrapperElement = wrapperRef?.current ?? document.body;
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

        observer.observe(triggerElement);

        return () => {
            observer.disconnect();
        };
    }, [callback, triggerRef, wrapperRef]);
}
