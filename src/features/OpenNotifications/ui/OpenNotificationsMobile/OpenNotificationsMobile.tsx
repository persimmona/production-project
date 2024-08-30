import { ReactNode, useCallback } from 'react';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useVisibility } from 'shared/utils/useVisibility';
import { useAnimationLibraries } from 'shared/contexts/animation';
import cls from './OpenNotificationsMobile.module.scss';

interface OpenNotificationsMobileProps {
    trigger: ReactNode;
    children: ReactNode;
}

const height = window.innerHeight - 100;

export function OpenNotificationsMobileContent(props: OpenNotificationsMobileProps) {
    const { Gesture, Spring } = useAnimationLibraries();

    const { trigger, children } = props;
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { closeHandler, isVisible, openHandler } = useVisibility();

    const onOpen = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const onClose = useCallback(
        (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: closeHandler,
            });
        },
        [Spring.config.stiff, api, closeHandler],
    );

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    onClose();
                } else {
                    onOpen();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <>
            <Button onClick={openHandler}>{trigger}</Button>

            <Modal isVisible={isVisible} onClose={closeHandler} className={cls.modal}>
                <Spring.a.div style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()}>
                    {children}
                </Spring.a.div>
            </Modal>
        </>
    );
}

export const OpenNotificationsMobile = (props: OpenNotificationsMobileProps) => {
    const { isLoaded } = useAnimationLibraries();

    if (!isLoaded) {
        return null;
    }

    return <OpenNotificationsMobileContent {...props} />;
};
