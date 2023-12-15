import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    it('renders the Footer content', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const footerContent = screen.getByTestId('footer-content');

        expect(footerContent).toBeInTheDocument();
        expect(footerContent.textContent).toContain(`©Amazu - ${currentYear}`);
    });
});
