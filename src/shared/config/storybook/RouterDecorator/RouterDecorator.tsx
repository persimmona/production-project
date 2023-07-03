import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';

export const RouterDecorator =
    (routeUrl = '/', routePath = AppRoutesPath[AppRoutes.MAIN]) =>
    (StoryComponent: Story) =>
        (
            <MemoryRouter initialEntries={[routeUrl]}>
                <Routes>
                    <Route path={routePath} element={<StoryComponent />} />
                </Routes>
            </MemoryRouter>
        );
