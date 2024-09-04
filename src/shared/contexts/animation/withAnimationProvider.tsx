import { AnimationProvider } from '@/shared/contexts/animation/AnimationProvider';
import { ComponentType } from 'react';

export const withAnimationProvider =
    <P extends object>(Component: ComponentType<P>) =>
    (props: P) =>
        (
            <AnimationProvider>
                <Component {...(props as P)} />
            </AnimationProvider>
        );
