import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { AsyncSchema, RootSchema } from './RootSchema';
import { createReducerManager } from './createReducerManager';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState?: RootSchema, asyncReducers?: ReducersMapObject<AsyncSchema>) => {
    const rootReducers: ReducersMapObject<RootSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<RootSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
