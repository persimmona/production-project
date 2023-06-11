import { ChangeEvent } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    id?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    disabled?: boolean;
}

export const Select = ({ id, options, value, onChange, className, disabled = false }: SelectProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value, e);
    };

    const optionList = options.map(({ label, value }) => (
        <option key={value} value={value} className={cls.option}>
            {label}
        </option>
    ));

    return (
        <select id={id} value={value} onChange={handleChange} disabled={disabled} className={classNames(cls.select, {}, [className])}>
            {optionList}
        </select>
    );
};
