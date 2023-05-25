import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { RootSchema, StoreProvider } from 'app/providers/store';
import { AsyncSchema } from 'app/providers/store/config/RootSchema';
import { loginFormReducer } from 'features/AuthByUsername/model/slice/loginFormSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<AsyncSchema>> = {
    loginForm: loginFormReducer,
};

export const StoreDecorator =
    // eslint-disable-next-line react/display-name
    (state: DeepPartial<RootSchema>, asyncReducers?: DeepPartial<ReducersMapObject<AsyncSchema>>) => (story: () => Story) =>
        (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                {story()}
            </StoreProvider>
        );
