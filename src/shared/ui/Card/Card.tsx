import { ReactNode } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './Card.module.scss';

interface CardProps {
    children: ReactNode;
    className?: string;
    testId?: string;
}

export function Card(props: CardProps) {
    const { className, children, testId } = props;

    return (
        <article className={classNames(cls.card, {}, [className])} data-testid={testId}>
            {children}
        </article>
    );
}
