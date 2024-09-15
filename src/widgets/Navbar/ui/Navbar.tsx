import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUserAuthData, userActions } from '@/entities/User';
import { LoginFormAsync } from '@/features/AuthByUsername';
import { OpenNotifications } from '@/features/OpenNotifications';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';
import { classNames } from '@/shared/utils/classNames/classNames';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { useVisibility } from '@/shared/utils/useVisibility';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(selectUserAuthData);
    const dispatch = useAppDispatch();

    const {
        isMounted: isLoginModalMounted,
        isVisible: isLoginModalVisible,
        closeHandler: closeLoginModal,
        openHandler: openLoginModal,
    } = useVisibility(false);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <PageContainer className={cls.inner}>
                    <OpenNotifications />
                    <Button onClick={() => dispatch(userActions.logout())}>{t('navbar.sign_out')}</Button>
                </PageContainer>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <PageContainer className={cls.inner}>
                <div className={cls.links}></div>
                <Button onClick={openLoginModal}>{t('navbar.sign_in')}</Button>

                {isLoginModalMounted && (
                    <Modal isVisible={isLoginModalVisible} onClose={closeLoginModal}>
                        <Suspense fallback={<Loader className={cls.loader} />}>
                            <LoginFormAsync onSuccess={closeLoginModal} />
                        </Suspense>
                    </Modal>
                )}
            </PageContainer>
        </header>
    );
};
