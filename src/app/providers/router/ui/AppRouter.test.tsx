import { render, screen } from '@testing-library/react';

import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { USER_ROLE } from '@/entities/User';
import { withRouter } from '@/shared/config/tests/withRouter/withRouter';
import { withStoreProvider } from '@/shared/config/tests/withStoreProvider/withStoreProvider';
import { withThemeProvider } from '@/shared/config/tests/withThemeProvider/withThemeProvider';
import { withTranslation } from '@/shared/config/tests/withTranslation/withTranslation';
import { AppRoutes, AppRoutesPath } from '@/shared/const/routes';

const AppRouterComponent = withStoreProvider(withRouter(withThemeProvider(withTranslation(AppRouter))));

describe('TEST AppRouter', () => {
    test('should render page', async () => {
        render(<AppRouterComponent route={AppRoutesPath[AppRoutes.ABOUT]()} />);

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('should redirect to main page when user is not authorized', async () => {
        render(<AppRouterComponent route={AppRoutesPath[AppRoutes.ARTICLES]()} />);

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('should redirect to forbidden page when user does not have permissions', async () => {
        render(
            <AppRouterComponent
                route={AppRoutesPath[AppRoutes.ADMIN_PANEL]()}
                initialState={{
                    user: {
                        _inited: true,
                        authData: {
                            roles: [USER_ROLE.USER],
                        },
                    },
                }}
            />,
        );

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('should render page when user is authorized', async () => {
        render(
            <AppRouterComponent
                route={AppRoutesPath[AppRoutes.ADMIN_PANEL]()}
                initialState={{
                    user: {
                        _inited: true,
                        authData: {
                            roles: [USER_ROLE.ADMIN],
                        },
                    },
                }}
            />,
        );

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
