import { Story } from '@storybook/api';
import { Theme } from 'shared/contexts/theme';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => <div className={`app ${theme}`}>{story()}</div>;
