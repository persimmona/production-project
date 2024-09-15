import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { ArticleListItem } from './ArticleListItem';
import { article } from '../../model/mock/articles';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    args: {
        article: article,
        variant: 'grid',
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <div style={{ width: '300px' }}>
        <ArticleListItem {...args} />
    </div>
);

export const LightGrid = Template.bind({});
LightGrid.args = {
    variant: 'grid',
};
LightGrid.decorators = [RouterDecorator()];
LightGrid.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    variant: 'grid',
};
DarkGrid.decorators = [RouterDecorator(), ThemeDecorator(Theme.DARK)];
DarkGrid.parameters = {
    backgrounds: getDarkThemeBackground(),
};

export const LightList = Template.bind({});
LightList.args = {
    variant: 'list',
};
LightList.decorators = [RouterDecorator()];
LightList.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DarkList = Template.bind({});
DarkList.args = { variant: 'list' };
DarkList.decorators = [RouterDecorator(), ThemeDecorator(Theme.DARK)];
DarkList.parameters = {
    backgrounds: getDarkThemeBackground(),
};
