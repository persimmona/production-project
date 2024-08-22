import { NotificationList, notificationApi } from 'entities/Notification';
import { classNames } from 'shared/utils/classNames';
import cls from './OpenNotifications.module.scss';

export const { useGetNotificationsQuery } = notificationApi;

interface OpenNotificationsProps {
    className?: string;
}

export function OpenNotifications(props: OpenNotificationsProps) {
    const { className } = props;
    const { isLoading, data } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });

    return (
        <div className={classNames(cls.openNotifications, {}, [className])}>
            <NotificationList notifications={data ?? []} loading={isLoading} />
        </div>
    );
}
