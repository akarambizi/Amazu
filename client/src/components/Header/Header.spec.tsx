import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    });

    describe('on mobile', () => {
        it('toggles navigation visibility when button is clicked', () => {
            const button = screen.getByLabelText(/open header/i);
            fireEvent.click(button);
            expect(screen.getByLabelText(/close header/i)).toBeInTheDocument();
            fireEvent.click(button);
            expect(screen.getByLabelText(/open header/i)).toBeInTheDocument();
        });

        it('hides navigation when a link is clicked', () => {
            const button = screen.getByLabelText(/open header/i);
            fireEvent.click(button);
            expect(screen.getByLabelText(/close header/i)).toBeInTheDocument();

            const links = ['Home', 'Rent', 'Buy', 'Sign In'];

            links.forEach((linkText) => {
                fireEvent.click(screen.getByText(linkText));
                expect(screen.getByLabelText(/open header/i)).toBeInTheDocument();
                fireEvent.click(button);
                expect(screen.getByLabelText(/close header/i)).toBeInTheDocument();
            });
        });
    });

    describe('on desktop', () => {
        beforeAll(() => {
            window.innerWidth = 1024; // Desktop screen width
        });

        it('renders correctly on desktop', () => {
            expect(screen.getByText('Home')).toBeInTheDocument();
            expect(screen.getByText('Rent')).toBeInTheDocument();
            expect(screen.getByText('Buy')).toBeInTheDocument();
            expect(screen.getByLabelText('Sign In')).toBeInTheDocument();
        });
    });
});
