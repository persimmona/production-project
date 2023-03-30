import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { Theme, useTheme } from 'shared/contexts/theme';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid='sidebar'>
            <div className={cls.main}>
                <AppLink color={theme === Theme.DARK ? AppLinkColor.PRIMARY : AppLinkColor.PRIMARY_INVERTED} to={'/'} className={cls.link}>
                    <HomeIcon className={cls.linkIcon} />
                    <span className={cls.linkLabel}>{t('navigation.main')}</span>
                </AppLink>
                <AppLink
                    color={theme === Theme.DARK ? AppLinkColor.SECONDARY : AppLinkColor.SECONDARY_INVERTED}
                    to={'/about'}
                    className={cls.link}
                >
                    <AboutIcon className={cls.linkIcon} />
                    <span className={cls.linkLabel}>{t('navigation.about_us')}</span>
                </AppLink>
            </div>

            <div className={cls.bottom}>
                <ThemeSwitcher className={cls.bottomItem} />
                <LangSwitcher className={cls.bottomItem} />
            </div>

            <Button onClick={toggleCollapse} data-testid='sidebar-toggle' className={cls.toggleButton}>
                {collapsed ? '<' : '>'}
            </Button>
        </div>
    );
};
