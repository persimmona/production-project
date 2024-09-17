import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '@/shared/contexts/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    backgrounds: { disable: true },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#f1eaea' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#11113c' },
        ],
        clearable: false,
    },
};

export const decorators = [StyleDecorator, SuspenseDecorator];
