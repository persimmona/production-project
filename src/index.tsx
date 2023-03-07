import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeContextProvider } from 'shared/contexts/theme/ui/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundry } from 'app/providers/error-boundry';

render(
    <BrowserRouter>
        <ErrorBoundry>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ErrorBoundry>
    </BrowserRouter>,
    document.getElementById('root'),
);
