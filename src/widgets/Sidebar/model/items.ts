import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoutesPath } from 'shared/const/routes';

export interface SidebarItemType {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    path: string;
    text: string;
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
    },
];
