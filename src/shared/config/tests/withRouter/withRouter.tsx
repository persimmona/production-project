import { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface WithRouterProps {
    route?: string;
}

export const withRouter =
    <P extends WithRouterProps = WithRouterProps>(Component: ComponentType<P>) =>
    ({ route = '/', ...props }: P) =>
        (
            <MemoryRouter initialEntries={[route]}>
                <Component {...(props as P)} />
            </MemoryRouter>
        );
