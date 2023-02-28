import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from 'shared/contexts/theme';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { classNames } from 'shared/utils/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.inner, {}, ['page-width'])}>
                <div className={cls.links}>
                    <AppLink
                        color={theme === Theme.DARK ? AppLinkColor.PRIMARY : AppLinkColor.PRIMARY_INVERTED}
                        to={'/'}
                        className={cls.link}
                    >
                        {t('navigation.main')}
                    </AppLink>
                    <AppLink
                        color={theme === Theme.DARK ? AppLinkColor.SECONDARY : AppLinkColor.SECONDARY_INVERTED}
                        to={'/about'}
                        className={cls.link}
                    >
                        {t('navigation.about_us')}
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
