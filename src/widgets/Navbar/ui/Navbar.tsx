import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/utils/classNames/classNames';
import { selectUserAuthData, userActions } from 'entities/User';
import { LoginForm } from 'features/AuthByUsername';
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
                    <LoginForm />
                </Modal>
            </div>
        </div>
    );
};
