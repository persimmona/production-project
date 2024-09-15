import { ReactNode } from 'react';

import { Header } from '@/shared/ui/Header';
import { Loader } from '@/shared/ui/Loader';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    children: ReactNode;
    loading: boolean;
    title?: string;
    actions?: ReactNode;
}

export const ProfileCard = ({ children, loading, actions, title }: ProfileCardProps) => {
    if (loading)
        return (
            <div className={cls.profileCard}>
                <Loader />
            </div>
        );

    return (
        <section className={cls.profileCard}>
            <div className={cls.header}>
                {title && <Header tag='h1'>{title}</Header>}
                {actions}
            </div>
            <div className={cls.body}>{children}</div>
        </section>
    );
};
