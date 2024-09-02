/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CSSProperties, MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import IconClose from '@/shared/assets/icons/close.svg';
import { Button } from '@/shared/ui/Button';
import { Portal } from '@/shared/ui/Portal';
import { classNames } from '@/shared/utils/classNames';
import cls from './Modal.module.scss';

export interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    showCloseButton?: boolean;
    className?: string;
    styles?: CSSProperties;
    container?: HTMLElement;
}

export const Modal = (props: ModalProps) => {
    const { isVisible, onClose, children, container, className, showCloseButton = true } = props;

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

    return (
        <Portal container={container}>
            <div className={classNames(cls.modal, { [cls.opened]: isVisible }, [className])} onClick={onClose} role='button' tabIndex={0}>
                <div className={cls.content} onClick={(e: MouseEvent) => e.stopPropagation()}>
                    {showCloseButton && (
                        <Button className={cls.buttonClose} onClick={onClose}>
                            <IconClose />
                        </Button>
                    )}
                    <div className={cls.contentInfo}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
