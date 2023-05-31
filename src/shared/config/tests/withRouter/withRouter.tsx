import { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface WithRouterProps {
    route?: string;
}

export const withRouter =
    <P extends object>(Component: ComponentType<P>) =>
    ({ route = '/', ...props }: P & WithRouterProps) =>
        (
            <MemoryRouter initialEntries={[route]}>
                <Component {...(props as P)} />
            </MemoryRouter>
        );
