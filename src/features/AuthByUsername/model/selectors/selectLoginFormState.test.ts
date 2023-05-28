import { DeepPartial } from '@reduxjs/toolkit';
import { RootSchema } from 'app/providers/store';
import { selectLoginFormState } from 'features/AuthByUsername/model/selectors/selectLoginFormState';

test('should return correct value', () => {
    const loginFormState: DeepPartial<RootSchema> = {
        loginForm: {
            username: 'admin',
            password: '111',
            isLoading: false,
        },
    };

    expect(selectLoginFormState(loginFormState as RootSchema)).toEqual(loginFormState.loginForm);
});

test('should return default value when state is empty', () => {
    expect(selectLoginFormState({} as RootSchema)).toEqual({
        username: '',
        password: '',
        isLoading: false,
    });
});
