import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useState } from 'react';

export const LoginForm = () => {
    const { t } = useTranslation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={cls.loginForm} onSubmit={() => {}}>
            <Input id='login-username' value={userName} onChange={setUserName} placeholder={t('login.username')} className={cls.input} />
            <Input id='login-password' value={password} onChange={setPassword} placeholder={t('login.password')} className={cls.input} />
            <Button type='submit'>{t('login.sign_in')}</Button>
        </form>
    );
};
