import { ComponentType } from 'react';
import { ThemeContextProvider } from 'shared/contexts/theme';

export const withThemeProvider =
    <P extends object>(Component: ComponentType<P>) =>
    (props: P) =>
        (
            <ThemeContextProvider>
                <Component {...(props as P)} />
            </ThemeContextProvider>
        );
