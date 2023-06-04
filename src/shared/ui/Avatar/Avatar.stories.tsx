import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {
        src: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
        variant: 'rounded',
        size: 'small',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
