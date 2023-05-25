import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
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
    const dispatch = useDispatch();

    const [toggleLoginModal, setToggleLoginModal] = useState(false);

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
                <Button onClick={() => setToggleLoginModal(true)}>{t('navbar.sign_in')}</Button>

                <Modal visible={toggleLoginModal} onClose={() => setToggleLoginModal(false)}>
                    <Suspense fallback={<Loader className={cls.loader} />}>
                        <LoginFormAsync />
                    </Suspense>
                </Modal>
            </div>
        </div>
    );
};
