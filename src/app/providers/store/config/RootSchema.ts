import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginFormSchema } from 'features/AuthByUsername';
import { ProfileFormSchema } from 'features/EditableProfile';

export interface RootSchema extends AsyncSchema {
    user: UserSchema;
}

export type RootSchemaKey = keyof RootSchema;

export interface AsyncSchema {
    loginForm?: LoginFormSchema;
    profile?: ProfileSchema;
    profileForm?: ProfileFormSchema;
}

export type AsyncSchemaKey = keyof AsyncSchema;

export interface ReducerManager {
    reduce: (state: RootSchema, action: AnyAction) => CombinedState<RootSchema>;
    add: (key: AsyncSchemaKey, reducer: Reducer) => void;
    remove: (key: AsyncSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<RootSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    dispatch: Dispatch;
    extra: ThunkExtraArg;
    rejectValue: T;
}
