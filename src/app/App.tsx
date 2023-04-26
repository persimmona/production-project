import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { useTheme } from 'shared/contexts/theme';

export const App = () => {
    const { theme } = useTheme();

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
