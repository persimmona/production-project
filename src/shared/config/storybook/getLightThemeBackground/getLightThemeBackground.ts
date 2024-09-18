import { Theme } from '@/shared/contexts/theme';

export const getLightThemeBackground = () => ({
    default: 'light',
    list: [{ name: 'light', class: ['app', Theme.LIGHT], color: '#f1eaea' }],
});
