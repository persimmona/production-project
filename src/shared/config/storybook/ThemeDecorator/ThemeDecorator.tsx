import { Story } from '@storybook/react';

import { Theme, ThemeContext } from '@/shared/contexts/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`app ${theme}`}>{<StoryComponent />}</div>
        </ThemeContext.Provider>
    );
};
