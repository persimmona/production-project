import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return <Page testId='NotFoundPage'>{t('not_found')}</Page>;
};
