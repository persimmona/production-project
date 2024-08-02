import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { classNames } from 'shared/utils/classNames';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

export function AdminPanelPage(props: AdminPanelPageProps) {
    const { className } = props;
    const { t } = useTranslation();

    return <Page className={classNames(cls.adminPanelPage, {}, [className])}>{t('admin_panel')}</Page>;
}
