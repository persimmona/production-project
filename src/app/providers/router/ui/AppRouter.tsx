import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Route, type RouteProps, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesPath } from 'shared/config/app-routes';

const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
};

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
        ))}
    </Routes>
);
