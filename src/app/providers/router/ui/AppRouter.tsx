import { Route, Routes, type RouteProps } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';
import { PageLoader } from 'widgets/PageLoader';

const routeConfig: Record<AppRoutes, RouteProps> = {
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
    },

    [AppRoutes.NOT_FOUND]: {
        path: AppRoutesPath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<PageLoader />}>
                        <div className='page-wrapper'>{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
);
