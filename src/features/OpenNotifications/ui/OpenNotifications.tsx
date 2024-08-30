import { NotificationList, notificationApi } from 'entities/Notification';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popover/Popover';
import { classNames } from 'shared/utils/classNames';
import { OpenNotificationsMobile } from './OpenNotificationsMobile/OpenNotificationsMobile';
import cls from './OpenNotifications.module.scss';

export const { useGetNotificationsQuery } = notificationApi;

interface OpenNotificationsProps {
    className?: string;
}

export function OpenNotifications(props: OpenNotificationsProps) {
    const { className } = props;
    const { isLoading, data } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });

    const renderTrigger = () => <Icon Svg={NotificationIcon} className={cls.icon} />;
    const renderNotifications = () => <NotificationList notifications={data ?? []} loading={isLoading} />;
    return (
        <div>
            <BrowserView>
                <Popover trigger={renderTrigger()} className={classNames(cls.popover, {}, [className])}>
                    {renderNotifications()}
                </Popover>
            </BrowserView>
            <MobileView>
                <OpenNotificationsMobile trigger={renderTrigger()}>{renderNotifications()}</OpenNotificationsMobile>
            </MobileView>
        </div>
    );
}
