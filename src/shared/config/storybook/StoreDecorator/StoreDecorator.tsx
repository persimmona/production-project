import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { AsyncSchema, RootSchema, StoreProvider } from '@/app/providers/store';
import { articleReducer } from '@/entities/Article';
import { loginFormReducer } from '@/features/AuthByUsername/model/slice/loginFormSlice';
import { profileFormReducer } from '@/features/EditableProfile/model/slice/profileFormSlice';
import { profileReducer } from '@/pages/ProfilePage/model/slice/profileSlice';
import { ReducersList } from '@/shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginFormReducer,
    profile: profileReducer,
    profileForm: profileFormReducer,
    article: articleReducer,
};

export const StoreDecorator =
    (state: DeepPartial<RootSchema>, asyncReducers: DeepPartial<ReducersMapObject<AsyncSchema>> = {}) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <StoryComponent />
            </StoreProvider>
        );
