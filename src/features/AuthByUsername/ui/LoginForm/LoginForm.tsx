import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button';
import { Header } from '@/shared/ui/Header';
import { Input } from '@/shared/ui/Input';
import { P } from '@/shared/ui/P';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from '@/shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

import { selectLoginFormState } from '../../model/selectors/selectLoginFormState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginFormActions, loginFormReducer } from '../../model/slice/loginFormSlice';

import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
    loginForm: loginFormReducer,
};

interface LoginFormProps {
    onSuccess?: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { isLoading, password, username, error } = useSelector(selectLoginFormState);

    useReducersDynamicLoader(initialReducers);

    const handleUsername = useCallback(
        (uid: string, value: string) => {
            dispatch(loginFormActions.setUsername(value));
        },
        [dispatch],
    );

    const handlePassword = useCallback(
        (uid: string, value: string) => {
            dispatch(loginFormActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = () => {
        dispatch(loginByUsername({ username, password }));
        onSuccess?.();
    };

    return (
        <>
            <Header tag='h2' className={cls.title}>
                {t('login.title')}
            </Header>
            <form className={cls.loginForm}>
                <Input
                    uid='login-username'
                    value={username}
                    onChange={handleUsername}
                    placeholder={t('login.username')}
                    className={cls.input}
                />
                <Input
                    uid='login-password'
                    value={password}
                    onChange={handlePassword}
                    placeholder={t('login.password')}
                    className={cls.input}
                />
                {error && (
                    <P color='error' size='small'>
                        {t('login.unknown_user')}
                    </P>
                )}
                <Button type='button' variant='outline' onClick={onLoginClick} disabled={isLoading}>
                    {t('login.sign_in')}
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
