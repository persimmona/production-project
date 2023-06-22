import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { AppRoutesPath } from 'shared/const/routes';

export interface SidebarItemType {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    path: string;
    text: string;
    authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
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
    {
        text: 'navigation.profile',
        Icon: ProfileIcon,
        path: AppRoutesPath.profile,
        authOnly: true,
    },
    {
        text: 'navigation.articles',
        Icon: ArticlesIcon,
        path: AppRoutesPath.articles,
        authOnly: true,
    },
];
