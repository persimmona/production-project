import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithTranslation from '../../../../shared/utils/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('should be in the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should be collapsed after clicking toggle button', async () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(button);

        await waitFor(() => expect(sidebar).not.toHaveClass('collapsed'));
    });
});
