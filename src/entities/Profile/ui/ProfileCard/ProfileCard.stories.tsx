import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
