import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit suscipit mauris sit amet vulputate. Nulla sed vulputate dui. Proin sollicitudin fringilla augue, a suscipit sem rutrum nec. Mauris in tellus orci. Fusce condimentum fringilla semper. Integer feugiat, erat vitae semper porttitor, augue dolor semper lacus, eu varius mi metus id lorem.',
        container: document.getElementById('root'),
        isVisible: true,
    },
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
