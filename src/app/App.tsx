import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from './providers/router';
import { useTheme } from 'shared/contexts/theme';
import { userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

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
