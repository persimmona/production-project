import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from '@/shared/contexts/theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    args: {
        title: 'Give us your opinion',
        selectedRating: 2,
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

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
