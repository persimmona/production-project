import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useVisibility } from 'shared/utils/useVisibility';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/utils/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { selectUserAuthData, userActions } from 'entities/User';
import { LoginFormAsync } from 'features/AuthByUsername';
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
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={classNames(cls.inner, {}, ['page-width'])}>
                    <Button onClick={() => dispatch(userActions.logout())}>{t('navbar.sign_out')}</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.inner, {}, ['page-width'])}>
                <div className={cls.links}></div>
                <Button onClick={openLoginModal}>{t('navbar.sign_in')}</Button>

                {isLoginModalMounted && (
                    <Modal isVisible={isLoginModalVisible} onClose={closeLoginModal}>
                        <Suspense fallback={<Loader className={cls.loader} />}>
                            <LoginFormAsync onSuccess={closeLoginModal} />
                        </Suspense>
                    </Modal>
                )}
            </div>
        </div>
    );
};
