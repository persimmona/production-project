import { NotificationList, notificationApi } from 'entities/Notification';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Button } from 'shared/ui/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popover/Popover';
import { classNames } from 'shared/utils/classNames';
import { useVisibility } from 'shared/utils/useVisibility';
import { AnimationProvider } from 'shared/contexts/animation';
import cls from './OpenNotifications.module.scss';

export const { useGetNotificationsQuery } = notificationApi;

interface OpenNotificationsProps {
    className?: string;
}

export function OpenNotifications(props: OpenNotificationsProps) {
    const { className } = props;
    const { isLoading, data } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });

    const { closeHandler, isVisible, openHandler } = useVisibility();

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
                <Button onClick={openHandler}>{renderTrigger()}</Button>
                <AnimationProvider>
                    <Drawer isVisible={isVisible} onClose={closeHandler}>
                        {renderNotifications()}
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
}
