import { ReactNode } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './Header.module.scss';

interface HeaderProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
    testId?: string;
}

export const Header = ({ tag, children, className, testId }: HeaderProps) => {
    const Component = tag;
    return (
        <Component className={classNames(cls[tag], {}, [className])} data-testid={testId}>
            {children}
        </Component>
    );
};
