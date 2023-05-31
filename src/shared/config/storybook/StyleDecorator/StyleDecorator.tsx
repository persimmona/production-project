import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import './override.scss';

export const StyleDecorator = (StoryComponent: Story) => <StoryComponent />;
