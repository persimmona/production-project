import { ModalController, ModalControllerProps } from './ModalController';

interface ModalProps extends ModalControllerProps {
    visible: boolean;
}

export const Modal = ({ visible, children, ...props }: ModalProps) => {
    if (!visible) return null;

    return <ModalController {...(props as ModalControllerProps)}>{children}</ModalController>;
};
