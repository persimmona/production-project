import { Suspense } from 'react';
import { useTheme } from 'shared/contexts/theme';
import { classNames } from 'shared/utils/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        // Route loader for initial bundle
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
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
