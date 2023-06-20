import { useTranslation } from 'react-i18next';
import { Theme } from 'shared/contexts/theme';
import { classNames } from 'shared/utils/classNames';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    theme: Theme;
    collapsed: boolean;
    isVisible?: boolean;
}

export const SidebarItem = ({ item, theme, collapsed, isVisible = false }: SidebarItemProps) => {
    const { t } = useTranslation();
    const color = theme === Theme.DARK ? AppLinkColor.PRIMARY : AppLinkColor.PRIMARY_INVERTED;

    if (!isVisible) return null;

    return (
        <AppLink to={item.path} color={color} className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.linkIcon} />
            <span className={cls.linkLabel}>{t(item.text)}</span>
        </AppLink>
    );
};
