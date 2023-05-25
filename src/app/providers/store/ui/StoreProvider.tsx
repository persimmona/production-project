import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { AsyncSchema, RootSchema } from '../config/RootSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<RootSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<AsyncSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(initialState as RootSchema, asyncReducers as ReducersMapObject<AsyncSchema>);

    return <Provider store={store}>{children}</Provider>;
};
