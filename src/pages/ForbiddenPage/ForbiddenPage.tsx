import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';
import { classNames } from '@/shared/utils/classNames';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

export function ForbiddenPage(props: ForbiddenPageProps) {
    const { className } = props;
    const { t } = useTranslation();

    return <Page className={classNames(cls.forbiddenPage, {}, [className])}>{t('forbidden')}</Page>;
}
