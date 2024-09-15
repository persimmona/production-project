import { ReactElement } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { P } from '@/shared/ui/P';
import { classNames } from '@/shared/utils/classNames';

import { Notification } from '../../model/types/notification';

import cls from './NotificationListItem.module.scss';

interface NotificationListItemProps {
    notification: Notification;
    className?: string;
}

export function NotificationListItem(props: NotificationListItemProps) {
    const { className, notification } = props;

    const renderContent = (): ReactElement => {
        const content = (
            <Card className={classNames(cls.notificationListItem, {}, [className])}>
                <P>{notification.description}</P>
            </Card>
        );

        if (notification.href) {
            return (
                <a target='_blank' href={notification.href} rel='noreferrer'>
                    {content}
                </a>
            );
        }
        return content;
    };

    return renderContent();
}
