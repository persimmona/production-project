import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { RootSchema } from './RootSchema';
import { userReducer } from 'entities/User';
import { loginFormReducer } from 'features/AuthByUsername';

export const createReduxStore = (initialState?: RootSchema) => {
    const rootReducers: ReducersMapObject<RootSchema> = {
        user: userReducer,
        loginForm: loginFormReducer,
    };

    return configureStore<RootSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
