import { Story } from '@storybook/react';
import { Theme, ThemeContext } from '@/shared/contexts/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.classList.remove(...Object.values(Theme));
    document.body.classList.add(theme);

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`app ${theme}`}>{<StoryComponent />}</div>
        </ThemeContext.Provider>
    );
};
