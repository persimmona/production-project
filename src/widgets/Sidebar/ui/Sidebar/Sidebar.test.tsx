import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { withRouter } from '@/shared/config/tests/withRouter/withRouter';
import { withStoreProvider } from '@/shared/config/tests/withStoreProvider/withStoreProvider';
import { withThemeProvider } from '@/shared/config/tests/withThemeProvider/withThemeProvider';
import { withTranslation } from '@/shared/config/tests/withTranslation/withTranslation';
import { Sidebar } from './Sidebar';

const SidebarWithWrappers = withStoreProvider(withRouter(withThemeProvider(withTranslation(Sidebar))));

describe('Sidebar', () => {
    test('should be in the document', () => {
        render(<SidebarWithWrappers />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should be collapsed after clicking toggle button', async () => {
        render(<SidebarWithWrappers />);
        const button = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(button);

        await waitFor(() => expect(sidebar).not.toHaveClass('collapsed'));
    });
});
