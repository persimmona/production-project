import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'flat';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button = ({ className, variant = 'flat', children, ...props }: ButtonProps) => {
    return (
        <button className={classNames(cls.button, {}, [cls[variant], className])} {...props}>
            {children}
        </button>
    );
};
