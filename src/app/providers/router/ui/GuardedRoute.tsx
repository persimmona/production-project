import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';

interface GuardedRouteProps {
    isRouteAccessible?: boolean;
    children: JSX.Element;
    redirectRoute?: string;
}

export const GuardedRoute = ({ children, isRouteAccessible = false, redirectRoute = AppRoutesPath[AppRoutes.MAIN] }: GuardedRouteProps) => {
    const location = useLocation();

    if (isRouteAccessible) return children;

    return <Navigate to={redirectRoute} state={{ from: location }} replace />;
};
