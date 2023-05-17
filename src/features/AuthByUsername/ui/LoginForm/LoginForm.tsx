import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { Header } from 'shared/ui/Header';
import { Input } from 'shared/ui/Input';
import { selectLoginFormState } from '../../model/selectors/selectLoginFormState';
import { loginFormActions } from '../../model/slice/loginFormSlice';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isLoading, password, username } = useSelector(selectLoginFormState);

    const handleUsername = useCallback(
        (value: string) => {
            dispatch(loginFormActions.setUsername(value));
        },
        [dispatch],
    );

    const handlePassword = useCallback(
        (value: string) => {
            dispatch(loginFormActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = () => {};

    return (
        <>
            <Header tag='h2' className={cls.title}>
                {t('login.title')}
            </Header>
            <form className={cls.loginForm} onSubmit={() => {}}>
                <Input
                    id='login-username'
                    value={username}
                    onChange={handleUsername}
                    placeholder={t('login.username')}
                    className={cls.input}
                />
                <Input
                    id='login-password'
                    value={password}
                    onChange={handlePassword}
                    placeholder={t('login.password')}
                    className={cls.input}
                />
                <Button type='button' onClick={onLoginClick} disabled={isLoading}>
                    {t('login.sign_in')}
                </Button>
            </form>
        </>
    );
};
