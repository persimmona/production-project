import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { HTMLElementValue } from '@/shared/types/utils';
import { classNames } from '@/shared/utils/classNames';
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
    const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);
    return (
        <HListbox as={'div'} value={value} onChange={handleChange} disabled={disabled} className={classNames(cls.listbox, {}, [className])}>
            {label && <HListbox.Label>{label}</HListbox.Label>}
            <div className={cls.listboxWrapper}>
                <HListbox.Button className={cls.button}>{selectedOption?.readableValue ?? EMPTY_VALUE}</HListbox.Button>
                <HListbox.Options as='ul' className={cls.options}>
                    {options.map((option) => (
                        <HListbox.Option as={Fragment} key={option.value} value={option.value} disabled={option.disabled}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.option, {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: option.disabled,
                                    })}
                                >
                                    {option.readableValue}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </div>
        </HListbox>
    );
}
