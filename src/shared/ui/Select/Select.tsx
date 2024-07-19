import { ChangeEvent } from 'react';
import { HTMLElementValue } from 'shared/types/utils';
import { classNames } from 'shared/utils/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends HTMLElementValue> {
    value: T;
    readableValue: string;
}

interface SelectProps<T extends HTMLElementValue> {
    uid: string;
    options: SelectOption<T>[];
    value: T;
    onChange: (uid: string, value: T) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export const Select = <T extends HTMLElementValue>(props: SelectProps<T>) => {
    const { uid, options, value, onChange, className, label, disabled = false } = props;
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(uid, e.target.value as T);
    };

    const optionList = options.map(({ readableValue, value }) => (
        <option key={value} value={value} className={cls.option}>
            {readableValue}
        </option>
    ));

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            {label && <label htmlFor={uid}>{label}</label>}
            <select id={uid} value={value} onChange={handleChange} disabled={disabled} className={cls.select}>
                {optionList}
            </select>
        </div>
    );
};
