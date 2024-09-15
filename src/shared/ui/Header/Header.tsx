import { ReactNode } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './Header.module.scss';

interface HeaderProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
}

export const Header = ({ tag, children, className }: HeaderProps) => {
    switch (tag) {
        case 'h1':
            return <h1 className={classNames(cls.h1, {}, [className])}>{children}</h1>;
        case 'h2':
            return <h2 className={classNames(cls.h2, {}, [className])}>{children}</h2>;
        case 'h3':
            return <h3 className={classNames(cls.h3, {}, [className])}>{children}</h3>;
        default:
            return <></>;
    }
};
