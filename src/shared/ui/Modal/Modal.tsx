import { ReactNode } from 'react';
import { ModalController } from './ModalController';

interface ModalProps {
    children: ReactNode;
    className?: string;
    onClose: () => void;
    visible: boolean;
}

export const Modal = ({ visible, onClose, className, children }: ModalProps) => {
    if (!visible) return null;

    return (
        <ModalController className={className} onClose={onClose}>
            {children}
        </ModalController>
    );
};
