import { UserRole } from 'entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',

    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
}

export const AppRoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ADMIN_PANEL]: '/admin',

    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.FORBIDDEN]: '/forbidden',
};
