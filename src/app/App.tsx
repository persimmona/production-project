import { selectUserInited, userActions } from '@/entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/shared/contexts/theme';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

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
