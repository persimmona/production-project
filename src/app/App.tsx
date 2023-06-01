import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useTheme } from 'shared/contexts/theme';
import { userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        // Route loader for initial bundle
        <Suspense fallback=''>
            <div className={`app ${theme}`}>
                <Navbar />
                <div className='content-wrapper'>
                    <Sidebar />
                    <AppRouter />
                </div>
                <div id='portal'></div>
            </div>
        </Suspense>
    );
};
