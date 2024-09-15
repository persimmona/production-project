import React from 'react';

import { HTMLElementValue } from '@/shared/types/utils';
import { classNames } from '@/shared/utils/classNames';

import cls from './QuickFilter.module.scss';

export interface QuickFilterProps<T> {
    value: T;
    label: string;
    onClick?: (value: T | null) => void;
    isSelected?: boolean;
    className?: string;
}

export function QuickFilter<T extends HTMLElementValue>(props: QuickFilterProps<T>) {
    const { className, label, value, isSelected, onClick } = props;

    const handleClick = () => {
        onClick?.(isSelected ? null : value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div
            role='button'
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className={classNames(cls.quickFilter, { [cls.selected]: isSelected }, [className])}
        >
            {label}
        </div>
    );
}
