import { ReactElement } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/utils/classNames';

import { Notification } from '../../model/types/notification';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
    notifications: Notification[];
    loading?: boolean;
    className?: string;
}

export function NotificationList(props: NotificationListProps) {
    const { notifications = [], loading = false, className } = props;

    if (loading) {
        return (
            <div className={classNames(cls.notificationList, {}, [className])}>
                <Skeleton height='40px' width='100%' />
                <Skeleton height='40px' width='100%' />
                <Skeleton height='40px' width='100%' />
            </div>
        );
    }

    const renderNotificationList = (): ReactElement[] => {
        return notifications.map((notification) => <NotificationListItem key={notification.id} notification={notification} />);
    };

    return <div className={classNames(cls.notificationList, {}, [className])}>{renderNotificationList()}</div>;
}
