import { Theme } from '@/shared/contexts/theme';

export const getDarkThemeBackground = () => ({
    default: 'dark',
    list: [{ name: 'dark', class: ['app', Theme.DARK], color: '#11113c' }],
});
