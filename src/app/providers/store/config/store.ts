import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './createReducerManager';
import { AsyncSchema, RootSchema, ThunkExtraArg } from './RootSchema';

export const createReduxStore = (initialState?: RootSchema, asyncReducers?: ReducersMapObject<AsyncSchema>) => {
    const rootReducers: ReducersMapObject<RootSchema> = {
        ...asyncReducers,
        user: userReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<RootSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
