/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CSSProperties, ReactNode, useCallback, useEffect } from 'react';
import { useAnimationLibraries } from '@/shared/contexts/animation';
import { Portal } from '@/shared/ui/Portal';
import { classNames } from '@/shared/utils/classNames';
import cls from './Drawer.module.scss';

export interface DrawerProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    styles?: CSSProperties;
    container?: HTMLElement;
}

const height = window.innerHeight - 100;

const DrawerContent = (props: DrawerProps) => {
    const { isVisible, onClose, children, container, className } = props;
    const { Gesture, Spring } = useAnimationLibraries();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isVisible) {
            openDrawer();
        }
    }, [api, isVisible, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
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

    return (
        <Portal container={container}>
            <div className={classNames(cls.drawer, { [cls.opened]: isVisible }, [className])} onClick={onClose} role='button' tabIndex={0}>
                <Spring.a.div className={cls.content} style={{ bottom: `calc(-100% + ${height - 100}px)`, y }} {...bind()}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

export const Drawer = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibraries();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};
