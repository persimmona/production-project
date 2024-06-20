import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { PageContainer } from 'shared/ui/PageContainer/PageContainer';
import { classNames } from 'shared/utils/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}

function PageWithRef(props: PageProps, ref: ForwardedRef<HTMLDivElement>) {
    const { className, children } = props;

    return (
        <div ref={ref} className={classNames(cls.page, {}, [className])}>
            <PageContainer>{children}</PageContainer>
        </div>
    );
}

export const Page = forwardRef(PageWithRef);
