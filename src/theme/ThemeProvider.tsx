import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeContextProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const defaultValue = useMemo(() => ({
		theme,
		setTheme
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	)
}