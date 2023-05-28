import { AnyAction, CombinedState, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginFormSchema } from 'features/AuthByUsername';

export interface RootSchema extends AsyncSchema {
    user: UserSchema;
}

export type RootSchemaKey = keyof RootSchema;

export interface AsyncSchema {
    loginForm?: LoginFormSchema;
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
