import { Listbox as HListbox } from '@headlessui/react';
import { ReactNode, useMemo } from 'react';
import { HTMLElementValue } from 'shared/types/utils';
import { classNames } from 'shared/utils/classNames';
import cls from './Listbox.module.scss';

const EMPTY_VALUE = '-';

type DropdownOption<T extends HTMLElementValue> = {
    value: T;
    readableValue: ReactNode;
    disabled?: boolean;
};

interface ListboxProps<T extends HTMLElementValue> {
    uid: string;
    options: DropdownOption<T>[];
    onChange: (uid: string, value: T) => void;
    value?: T;
    label?: string;
    disabled?: boolean;
    className?: string;
}

export function Listbox<T extends HTMLElementValue>(props: ListboxProps<T>) {
    const { uid, className, options, value, onChange, disabled, label } = props;

    const handleChange = (value: T) => {
        onChange(uid, value);
    };

    // TODO: check what SimpleComboBox accepts
    const selectedOption = useMemo(() => options.find((option) => option.value === value), [options]);
    return (
        <HListbox as={'div'} value={value} onChange={handleChange} disabled={disabled} className={classNames(cls.listbox, {}, [className])}>
            {label && <HListbox.Label>{label}</HListbox.Label>}
            <HListbox.Button>{selectedOption?.readableValue ?? EMPTY_VALUE}</HListbox.Button>
            <HListbox.Options>
                {options.map((option) => (
                    <HListbox.Option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.readableValue}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
