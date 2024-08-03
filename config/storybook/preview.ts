import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#f1eaea',
            },
            {
                name: 'dark',
                value: '#11113c',
            },
        ],
    },
};

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), SuspenseDecorator];
