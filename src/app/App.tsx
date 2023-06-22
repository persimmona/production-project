import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useTheme } from 'shared/contexts/theme';
import { selectUserInited, userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { useSelector } from 'react-redux';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const userInitied = useSelector(selectUserInited);

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
                    {userInitied && <AppRouter />}
                </div>
                <div id='portal'></div>
            </div>
        </Suspense>
    );
};
