import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './P.module.scss';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'error';
    children: ReactNode;
}

export const P = ({ size = 'medium', color = 'default', children, className, ...props }: PProps) => {
    return (
        <p className={classNames(cls.p, {}, [className, cls[size], cls[color]])} {...props}>
            {children}
        </p>
    );
};
