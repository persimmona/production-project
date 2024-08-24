import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from 'shared/contexts/theme';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    args: {
        trigger: <div>Button</div>,
        children: <div>Some element</div>,
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover {...args} />
    </div>
);

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
