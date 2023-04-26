import { Story } from '@storybook/api';
import { Theme, ThemeContext } from 'shared/contexts/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (story: () => Story) => {
    document.body.classList.remove(...Object.values(Theme));
    document.body.classList.add(theme);

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`app ${theme}`}>{story()}</div>
        </ThemeContext.Provider>
    );
};
