import { ReactNode } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card(props: CardProps) {
    const { className, children } = props;

    return <article className={classNames(cls.card, {}, [className])}>{children}</article>;
}
