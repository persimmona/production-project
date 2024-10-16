import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from '@/shared/contexts/theme';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/utils/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant='flat' onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
