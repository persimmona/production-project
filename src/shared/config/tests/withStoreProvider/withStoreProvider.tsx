import { ComponentType } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { RootSchema, StoreProvider } from 'app/providers/store';

interface WithRouterProps {
    initialState?: DeepPartial<RootSchema>;
}

export const withStoreProvider =
    <P,>(Component: ComponentType<P>) =>
    ({ initialState, ...props }: P & WithRouterProps) =>
        (
            <StoreProvider initialState={initialState}>
                <Component {...(props as P)} />
            </StoreProvider>
        );
