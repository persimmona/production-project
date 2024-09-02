import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
    args: {
        value: '',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange: () => {},
        placeholder: 'Label',
    },
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
