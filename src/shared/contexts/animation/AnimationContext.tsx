import { createContext, useContext } from 'react';

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');

interface AnimationContextApi {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded: boolean;
}

export const AnimationContext = createContext<AnimationContextApi>({
    isLoaded: false,
});

export const useAnimationLibraries = () => {
    return useContext(AnimationContext) as Required<AnimationContextApi>;
};
