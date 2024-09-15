import { ComponentType } from 'react';

import { AnimationProvider } from '@/shared/contexts/animation/AnimationProvider';

export const withAnimationProvider =
    <P extends object>(Component: ComponentType<P>) =>
    (props: P) =>
        (
            <AnimationProvider>
                <Component {...(props as P)} />
            </AnimationProvider>
        );
