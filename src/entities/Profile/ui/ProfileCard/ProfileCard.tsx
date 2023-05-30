import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/utils/classNames';
import { selectProfileData } from '../../model/selectors/selectProfileData';
import { selectProfileError } from '../../model/selectors/selectProfileError';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading';
import cls from './ProfileCard.module.scss';
import { Button } from 'shared/ui/Button';
import { Header } from 'shared/ui/Header';
import { Loader } from 'shared/ui/Loader';
import { P } from 'shared/ui/P';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(selectProfileData);
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);

    if (isLoading) return <Loader />;

    if (error) return <P>{t(error)}</P>;

    if (!data) return null;

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Header tag='h1'>{t('hello') + ' ' + data?.first}</Header>
                <Button variant='outline'>{t('edit')}</Button>
            </div>
        </div>
    );
};
