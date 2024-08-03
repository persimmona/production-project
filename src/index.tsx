import { App } from 'app/App';
import { ErrorBoundry } from 'app/providers/error-boundry';
import { StoreProvider } from 'app/providers/store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ThemeContextProvider } from 'shared/contexts/theme/ui/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Not found container');
}

const root = createRoot(container);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundry>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </ErrorBoundry>
        </BrowserRouter>
    </StoreProvider>,
);
