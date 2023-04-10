import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    containerRef?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, containerRef = document.getElementById('portal') }) => {
    return createPortal(children, containerRef);
};
