import { ReactNode } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './PageContainer.module.scss';

interface PageContainerProps {
    className?: string;
    children: ReactNode;
}

export function PageContainer(props: PageContainerProps) {
    const { className, children } = props;

    return <div className={classNames(cls.pageContainer, {}, [className])}>{children}</div>;
}
