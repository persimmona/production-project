import { ComponentType, FC } from 'react';

import { RootSchema, StoreProvider } from '@/app/providers/store';

interface WithRouterProps {
    initialState?: DeepPartial<RootSchema>;
}

export const withStoreProvider =
    <P extends object>(Component: ComponentType<P>): FC<P & WithRouterProps> =>
    ({ initialState, ...props }: WithRouterProps) =>
        (
            <StoreProvider initialState={initialState}>
                <Component {...(props as P)} />
            </StoreProvider>
        );
