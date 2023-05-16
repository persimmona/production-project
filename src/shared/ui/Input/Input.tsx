import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useCallback } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Input.module.scss';

type HTMLInputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputElementProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
}

export const Input = ({ value, onChange, placeholder, type = 'text', className, ...props }: InputProps) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange],
    );

    return (
        <label className={classNames(cls.wrapper, {}, [className])}>
            <input type={type} value={value} onChange={handleChange} className={cls.input} placeholder=' ' {...props} />

            {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
        </label>
    );
};
