import { NotificationList, notificationApi } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popover/Popover';
import cls from './OpenNotifications.module.scss';

export const { useGetNotificationsQuery } = notificationApi;

interface OpenNotificationsProps {
    className?: string;
}

export function OpenNotifications(props: OpenNotificationsProps) {
    const { className } = props;
    const { isLoading, data } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });

    const renderTrigger = () => <Icon Svg={NotificationIcon} className={cls.icon} />;

    return (
        <Popover trigger={renderTrigger()} className={className}>
            <NotificationList notifications={data ?? []} loading={isLoading} className={cls.notifications} />
        </Popover>
    );
}
