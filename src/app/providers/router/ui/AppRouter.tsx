import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { USER_ROLE } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutes, AppRoutesPath } from '@/shared/const/routes';
import { AppRoutesProps } from '@/shared/types/routes';
import { PageLoader } from '@/widgets/PageLoader';

import { GuardedRoute } from './GuardedRoute';

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutesPath[AppRoutes.MAIN](),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutesPath[AppRoutes.ABOUT](),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: AppRoutesPath[AppRoutes.PROFILE](':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: AppRoutesPath[AppRoutes.ARTICLES](),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: AppRoutesPath[AppRoutes.ARTICLE_DETAILS](':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: AppRoutesPath[AppRoutes.ADMIN_PANEL](),
        element: <div></div>,
        authOnly: true,
        roles: [USER_ROLE.ADMIN],
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRoutesPath[AppRoutes.NOT_FOUND](),
        element: <NotFoundPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: AppRoutesPath[AppRoutes.FORBIDDEN](),
        element: <div></div>,
    },
};

export const AppRouter = () => {
    const renderRoute = (route: AppRoutesProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <GuardedRoute routeRoles={route.roles}>{element}</GuardedRoute> : element}
            />
        );
    };

    return <Routes>{Object.values(routeConfig).map(renderRoute)}</Routes>;
};
