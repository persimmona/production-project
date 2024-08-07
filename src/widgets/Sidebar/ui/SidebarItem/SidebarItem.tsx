import { useTranslation } from 'react-i18next';
import { Theme } from 'shared/contexts/theme';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { classNames } from 'shared/utils/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    theme: Theme;
    collapsed: boolean;
}

export const SidebarItem = ({ item, theme, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const color = theme === Theme.DARK ? AppLinkColor.PRIMARY : AppLinkColor.PRIMARY_INVERTED;

    return (
        <li>
            <AppLink to={item.path} color={color} className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
                <item.Icon className={cls.linkIcon} />
                <span className={cls.linkLabel}>{t(item.text)}</span>
            </AppLink>
        </li>
    );
};
