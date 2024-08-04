import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AppDispatch } from 'app/providers/store/config/store';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { AddCommnetFormSchema } from 'features/AddCommentForm';
import { LoginFormSchema } from 'features/AuthByUsername';
import { ProfileFormSchema } from 'features/EditableProfile';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ProfileSchema } from 'pages/ProfilePage';
import { rtkApi } from 'shared/api/rtkApi';
import { ArticleCommentListSchema } from 'widgets/ArticleCommentList';

export interface RootSchema extends AsyncSchema {
    user: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type RootSchemaKey = keyof RootSchema;

export interface AsyncSchema {
    loginForm?: LoginFormSchema;
    profile?: ProfileSchema;
    profileForm?: ProfileFormSchema;
    article?: ArticleSchema;
    articleCommentList?: ArticleCommentListSchema;
    addCommentForm?: AddCommnetFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type AsyncSchemaKey = keyof AsyncSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootSchema>;
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
    dispatch: AppDispatch;
    extra: ThunkExtraArg;
    rejectValue: T;
}
