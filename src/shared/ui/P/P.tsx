import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './P.module.scss';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
}

export const P = ({ size = 'medium', children, className, ...props }: PProps) => {
    return (
        <p
            className={classNames(
                cls.p,
                {
                    [cls.s]: size == 'small',
                    [cls.m]: size == 'medium',
                    [cls.l]: size == 'large',
                },
                [className],
            )}
            {...props}
        >
            {children}
        </p>
    );
};
