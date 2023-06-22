import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';

interface GuardedRouteProps {
    children: JSX.Element;
    isRouteHidden?: boolean;
    redirectRoute?: string;
}

export const GuardedRoute = ({ children, isRouteHidden = false, redirectRoute = AppRoutesPath[AppRoutes.MAIN] }: GuardedRouteProps) => {
    const location = useLocation();

    if (isRouteHidden) return <Navigate to={redirectRoute} state={{ from: location }} replace />;

    return children;
};
