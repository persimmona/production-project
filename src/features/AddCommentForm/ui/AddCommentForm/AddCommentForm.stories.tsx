import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {},
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.decorators = [
    StoreDecorator({
        addCommentForm: { text: 'Hey, there is a new comment' },
    }),
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        addCommentForm: { text: 'Hey, there is a new comment' },
    }),
];
