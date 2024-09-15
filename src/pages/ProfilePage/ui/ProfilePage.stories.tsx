import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            data: {
                country: Country.Ukraine,
                currency: Currency.UAH,
                firstname: 'Alona',
                lastname: 'Sydorova',
                age: 23,
                city: 'Mariupol',
                username: 'admin',
                avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
            },
        },
    }),
];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        profile: {
            data: {
                country: Country.Ukraine,
                currency: Currency.UAH,
                firstname: 'Alona',
                lastname: 'Sydorova',
                age: 23,
                city: 'Mariupol',
                username: 'admin',
                avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
