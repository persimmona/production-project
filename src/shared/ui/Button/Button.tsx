import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/utils/classNames";
import style from "./Button.module.scss";

export type ButtonVariant = "flat";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
}

export const Button = ({
  className,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(style.button, {}, [style[variant], className])}
      {...props}
    >
      {children}
    </button>
  );
};
