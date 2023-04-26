/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import IconClose from 'shared/assets/icons/close.svg';
import { Button } from 'shared/ui/Button';
import { Portal } from 'shared/ui/Portal';
import { classNames } from 'shared/utils/classNames';
import { useVisibility } from 'shared/utils/useVisibility';
import cls from './Modal.module.scss';

export interface ModalControllerProps {
    children: ReactNode;
    className?: string;
    onClose: () => void;
    container?: HTMLElement;
}

export const ModalController = ({ className, onClose, children, container }: ModalControllerProps) => {
    const { isOpened, closeHandler } = useVisibility(onClose);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHandler();
        },
        [closeHandler],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);

    return (
        <Portal container={container}>
            <div
                className={classNames(cls.modal, { [cls.opened]: isOpened }, [className])}
                onClick={closeHandler}
                role='button'
                tabIndex={0}
                onKeyDown={closeHandler}
            >
                <div className={cls.content} onClick={(e: MouseEvent) => e.stopPropagation()}>
                    <Button className={cls.buttonClose} onClick={closeHandler}>
                        <IconClose />
                    </Button>
                    <div className={cls.contentInfo}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
