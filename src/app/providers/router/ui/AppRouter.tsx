import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesPath, AppRoutesProps } from 'shared/const/routes';
import { selectUserAuthData } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
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
        path: AppRoutesPath[AppRoutes.PROFILE],
        element: <ProfilePage />,
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
                        <GuardedRoute key={path} isRouteAccessible={authOnly ? !!auth : true}>
                            <Suspense fallback={<PageLoader />}>
                                <div className='page-wrapper'>{element}</div>
                            </Suspense>
                        </GuardedRoute>
                    }
                />
            ))}
        </Routes>
    );
};
