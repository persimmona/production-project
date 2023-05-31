import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { RootSchema, StoreProvider, AsyncSchema } from 'app/providers/store';
import { profileReducer } from 'entities/Profile';
import { loginFormReducer } from 'features/AuthByUsername/model/slice/loginFormSlice';
import { ReducersList } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginFormReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (state: DeepPartial<RootSchema>, asyncReducers: DeepPartial<ReducersMapObject<AsyncSchema>> = {}) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <StoryComponent />
            </StoreProvider>
        );
