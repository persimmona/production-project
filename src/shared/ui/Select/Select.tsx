import { ChangeEvent } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
}

export const Select = ({ options, onChange, className, disabled = false }: SelectProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    const optionList = options.map(({ label, value }) => (
        <option key={value} value={value} className={cls.option}>
            {label}
        </option>
    ));

    return (
        <select className={classNames(cls.select, {}, [className])} onChange={handleChange} disabled={disabled}>
            {optionList}
        </select>
    );
};
