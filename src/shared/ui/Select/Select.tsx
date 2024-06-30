import { ChangeEvent } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    label: string;
}

interface SelectProps<T> {
    uid: string;
    options: SelectOption<T>[];
    value: T;
    onChange: (uid: string, value: T) => void;
    className?: string;
    disabled?: boolean;
}

export const Select = <T extends string>({ uid, options, value, onChange, className, disabled = false }: SelectProps<T>) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(uid, e.target.value as T);
    };

    const optionList = options.map(({ label, value }) => (
        <option key={value} value={value} className={cls.option}>
            {label}
        </option>
    ));

    return (
        <select value={value} onChange={handleChange} disabled={disabled} className={classNames(cls.select, {}, [className])}>
            {optionList}
        </select>
    );
};
