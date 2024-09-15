import { ComponentType } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from '@/shared/config/i18n/i18nForTests';

export const withTranslation =
    <P extends object>(Component: ComponentType<P>) =>
    (props: P) =>
        (
            <I18nextProvider i18n={i18nForTests}>
                <Component {...(props as P)} />
            </I18nextProvider>
        );
