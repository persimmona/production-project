import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';
import { ModalController } from './ModalController';

export default {
    title: 'shared/Modal',
    component: ModalController,
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit suscipit mauris sit amet vulputate. Nulla sed vulputate dui. Proin sollicitudin fringilla augue, a suscipit sem rutrum nec. Mauris in tellus orci. Fusce condimentum fringilla semper. Integer feugiat, erat vitae semper porttitor, augue dolor semper lacus, eu varius mi metus id lorem.',
        container: document.getElementById('root'),
    },
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof ModalController>;

const Template: ComponentStory<typeof ModalController> = (args) => <ModalController {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
