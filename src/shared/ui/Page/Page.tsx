import { ForwardedRef, ReactNode, forwardRef } from 'react';

import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    testId?: string;
}

function PageWithRef(props: PageProps, ref: ForwardedRef<HTMLDivElement>) {
    const { className, children, testId } = props;

    return (
        <main ref={ref} className={cls.page} data-testid={testId ?? 'Page'}>
            <PageContainer className={className}>{children}</PageContainer>
        </main>
    );
}

export const Page = forwardRef(PageWithRef);
