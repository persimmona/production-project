import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { Suspense } from 'react';
import { Route, type RouteProps, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesPath } from 'shared/config/app-routes';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
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
