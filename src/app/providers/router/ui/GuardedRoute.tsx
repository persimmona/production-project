import { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserAuthData, UserRole } from '@/entities/User';
import { AppRoutes, AppRoutesPath } from '@/shared/const/routes';

interface GuardedRouteProps {
    children: ReactElement;
    routeRoles?: UserRole[];
}

export const GuardedRoute = ({ children, routeRoles }: GuardedRouteProps) => {
    const location = useLocation();

    const auth = useSelector(selectUserAuthData);

    const hasRequiredRoles = useMemo(() => {
        if (!routeRoles) {
            return true;
        }

        return routeRoles.some((requiredRole) => auth?.roles.includes(requiredRole));
    }, [auth?.roles, routeRoles]);

    if (!auth) {
        return <Navigate to={AppRoutesPath[AppRoutes.MAIN]} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={AppRoutesPath[AppRoutes.FORBIDDEN]} state={{ from: location }} replace />;
    }

    return children;
};
