import { Story } from '@storybook/api';
import { Theme } from 'shared/contexts/theme';
import { ThemeContext } from 'shared/contexts/theme';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) =>
    (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`app ${theme}`}>{story()}</div>
        </ThemeContext.Provider>
    );
