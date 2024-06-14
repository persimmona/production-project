import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoutesPath } from 'shared/const/routes';
import { SidebarItemType } from '../types/sidebar';

export const selectSidebarItems = createSelector(selectUserAuthData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
        {
            text: 'navigation.main',
            Icon: HomeIcon,
            path: AppRoutesPath.main,
        },
        {
            text: 'navigation.about_us',
            Icon: AboutIcon,
            path: AppRoutesPath.about,
        },
    ];
    if (userData) {
        sidebarItemList.push(
            {
                text: 'navigation.profile',
                Icon: ProfileIcon,
                path: AppRoutesPath.profile + userData.id,
            },
            {
                text: 'navigation.articles',
                Icon: ArticlesIcon,
                path: AppRoutesPath.articles,
            },
        );
    }

    return sidebarItemList;
});
