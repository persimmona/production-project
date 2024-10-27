import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';

import { HTMLElementValue } from '@/shared/types/utils';
import { classNames } from '@/shared/utils/classNames';

import cls from './Input.module.scss';

type HTMLInputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps<T> extends HTMLInputElementProps {
    uid: string;
    value: T;
    onChange: (uid: string, value: T) => void;
    className?: string;
    placeholder: string;
}

export const Input = <T extends HTMLElementValue>({
    uid,
    value,
    onChange,
    placeholder,
    type = 'text',
    className,
    ...props
}: InputProps<T>) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(uid, event.target.value as T);
        },
        [onChange, uid],
    );

    return (
        <label className={classNames(cls.wrapper, {}, [className])}>
            <input type={type} value={value} onChange={handleChange} className={cls.input} data-testid={'Input.' + uid} {...props} />

            {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
        </label>
    );
};
