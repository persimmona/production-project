import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Currency } from '@/entities/Currency';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    args: {
        label: 'Select currency',
        uid: 'currency',
        options: [
            {
                readableValue: `${Currency.UAH} (hrywna)`,
                value: Currency.UAH,
                disabled: true,
            },
            {
                readableValue: `${Currency.PLN} (złoty)`,
                value: Currency.PLN,
            },
            {
                readableValue: `USD (dollar)`,
                value: 'USD',
            },
        ],
        value: Currency.PLN,
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
