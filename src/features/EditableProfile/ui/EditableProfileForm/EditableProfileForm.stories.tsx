import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'shared/contexts/theme';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileFormError } from '../../model/types/profileForm';
import EditableProfileForm from './EditableProfileForm';

export default {
    title: 'features/EditableProfileForm',
    component: EditableProfileForm,
    argTypes: {},
    args: {
        initialData: {
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
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof EditableProfileForm>;

const Template: ComponentStory<typeof EditableProfileForm> = (args) => <EditableProfileForm {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.decorators = [StoreDecorator({})];

export const WithErrors = Template.bind({});
WithErrors.decorators = [
    StoreDecorator({
        profileForm: {
            validateErrors: [ValidateProfileFormError.INCORRECT_USER_DATA, ValidateProfileFormError.INCORRECT_AGE],
        },
    }),
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
