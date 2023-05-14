import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RootSchema } from '../config/RootSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: RootSchema;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
