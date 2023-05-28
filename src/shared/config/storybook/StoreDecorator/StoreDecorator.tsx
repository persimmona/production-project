import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { RootSchema, StoreProvider, AsyncSchema } from 'app/providers/store';
import { profileReducer } from 'entities/Profile';
import { loginFormReducer } from 'features/AuthByUsername/model/slice/loginFormSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<AsyncSchema>> = {
    loginForm: loginFormReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (state: DeepPartial<RootSchema> = {}, asyncReducers: DeepPartial<ReducersMapObject<AsyncSchema>> = {}) =>
    // eslint-disable-next-line react/display-name
    (story: () => Story) =>
        (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                {story()}
            </StoreProvider>
        );
