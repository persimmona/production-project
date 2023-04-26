import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    return (
        // Route loader for initial bundle
        <Suspense fallback=''>
            <div className='app'>
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
