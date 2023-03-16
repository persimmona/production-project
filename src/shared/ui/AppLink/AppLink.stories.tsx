import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';
import { AppLink, AppLinkColor } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        color: {
            control: 'select',
            options: [AppLinkColor.PRIMARY, AppLinkColor.PRIMARY_INVERTED, AppLinkColor.SECONDARY, AppLinkColor.SECONDARY_INVERTED],
        },
    },
    args: {
        color: AppLinkColor.PRIMARY,
        children: 'Text',
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
