/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/utils/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.inner, {}, ['page-width'])}>
                <div className={cls.links}></div>
                <Button onClick={() => setToggleModal(true)}>ToggleModal</Button>
                <Modal visible={toggleModal} onClose={() => setToggleModal(false)}>
                    Hej, I`m text
                </Modal>
            </div>
        </div>
    );
};
