import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { AsyncSchema, RootSchema, ThunkExtraArg } from './RootSchema';
import { createReducerManager } from './createReducerManager';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';

export const createReduxStore = (initialState?: RootSchema, asyncReducers?: ReducersMapObject<AsyncSchema>) => {
    const rootReducers: ReducersMapObject<RootSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
