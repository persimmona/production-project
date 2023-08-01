import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesPath, AppRoutesProps } from 'shared/const/routes';
import { selectUserAuthData } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ProfilePage } from 'pages/ProfilePage';
import { PageLoader } from 'widgets/PageLoader';
import { GuardedRoute } from './GuardedRoute';

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: AppRoutesPath[AppRoutes.PROFILE] + ':id',
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: AppRoutesPath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: AppRoutesPath[AppRoutes.ARTICLE_DETAILS] + ':id',
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRoutes.NOT_FOUND]: {
        path: AppRoutesPath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

export const AppRouter = () => {
    const auth = useSelector(selectUserAuthData);

    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element, authOnly }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <GuardedRoute key={path} isRouteHidden={authOnly && !auth}>
                            <Suspense fallback={<PageLoader />}>
                                <div className='page-wrapper'>
                                    <div className='page-width'>{element}</div>
                                </div>
                            </Suspense>
                        </GuardedRoute>
                    }
                />
            ))}
        </Routes>
    );
};
