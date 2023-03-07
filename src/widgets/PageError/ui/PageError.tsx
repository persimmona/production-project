import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';
import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError)}>
            <p>{t('unexpected_error')}</p>
            <Button onClick={reloadPage}>{t('reload_page')}</Button>
        </div>
    );
};
