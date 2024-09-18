import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit suscipit mauris sit amet vulputate. Nulla sed vulputate dui. Proin sollicitudin fringilla augue, a suscipit sem rutrum nec. Mauris in tellus orci. Fusce condimentum fringilla semper. Integer feugiat, erat vitae semper porttitor, augue dolor semper lacus, eu varius mi metus id lorem.',
        container: document.getElementById('root'),
        isVisible: true,
    },
    parameters: {
        themes: { disable: true },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
