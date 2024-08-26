import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { classNames } from 'shared/utils/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <li>
            <AppLink
                to={item.path}
                color={AppLinkColor.SECONDARY_INVERTED}
                className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.linkIcon} />
                <span className={cls.linkLabel}>{t(item.text)}</span>
            </AppLink>
        </li>
    );
};
