import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('should be in the document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should accept flat variant', () => {
        render(<Button variant='flat'>TEST</Button>);
        expect(screen.getByText(/test/i)).toHaveClass('flat');
    });
});
