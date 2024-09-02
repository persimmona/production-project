import React, { ReactNode } from 'react';
import { HTMLElementValue } from '@/shared/types/utils';
import { classNames } from '@/shared/utils/classNames';
import { QuickFilterProps } from '../QuickFilter/QuickFilter';
import cls from './QuickFilters.module.scss';

interface QuickFiltersProps<T> {
    children: ReactNode;
    selectedValue: T | null;
    onChange: (value: T | null) => void;
    className?: string;
}

export function QuickFilters<T extends HTMLElementValue>(props: QuickFiltersProps<T>) {
    const { className, children, selectedValue, onChange } = props;

    const renderQuickFilter = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement<QuickFilterProps<T>>(child)) {
                return React.cloneElement(child, { isSelected: selectedValue === child.props.value, onClick: onChange });
            }
            return child;
        });
    };

    return <div className={classNames(cls.quickFilters, {}, [className])}>{renderQuickFilter()}</div>;
}
