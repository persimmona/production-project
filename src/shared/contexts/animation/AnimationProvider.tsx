import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { AnimationContext, GestureType, SpringType } from './AnimationContext';

interface AnimationProviderProps {
    children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Promise.all([import('@react-spring/web'), import('@use-gesture/react')]).then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
