import { Story } from '@storybook/api';
import { Theme, ThemeContext } from 'shared/contexts/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (story: () => Story) =>
    (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`app ${theme}`}>{story()}</div>
        </ThemeContext.Provider>
    );
