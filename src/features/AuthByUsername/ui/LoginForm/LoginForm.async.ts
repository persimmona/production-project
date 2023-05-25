import { lazy } from 'react';

export const LoginFormAsync = lazy(
    () =>
        new Promise((resolve) => {
            // TODO: for test, need to remove
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./LoginForm')), 1500);
        }),
);
