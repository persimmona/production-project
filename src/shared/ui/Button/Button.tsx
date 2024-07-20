import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { Theme, useTheme } from 'shared/contexts/theme';
import { classNames } from 'shared/utils/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'flat' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    children: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, variant = 'flat', children, ...buttonProps } = props;
    const { theme } = useTheme();

    const variantName = theme === Theme.LIGHT ? variant + '-inversed' : variant;
    return (
        <button ref={ref} className={classNames(cls.button, {}, [cls[variantName], className])} {...buttonProps}>
            {children}
        </button>
    );
});
