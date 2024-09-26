import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
