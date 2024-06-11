import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Theme, useTheme } from 'shared/contexts/theme';
import { classNames } from 'shared/utils/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'flat' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    children: ReactNode;
}

export const Button = ({ className, variant = 'flat', children, ...props }: ButtonProps) => {
    const { theme } = useTheme();

    const variantName = theme === Theme.LIGHT ? variant + '-inversed' : variant;
    return (
        <button className={classNames(cls.button, {}, [cls[variantName], className])} {...props}>
            {children}
        </button>
    );
};
