import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Hero } from './Hero';

describe('HeroForm', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
    });

    it('renders the Hero form', () => {
        expect(screen.getByTestId('hero-form')).toBeInTheDocument();
    });

    it('submits the Hero form with user input', () => {
        const input = screen.getByLabelText('search');
        fireEvent.change(input, { target: { value: 'New York' } });

        fireEvent.submit(screen.getByTestId('hero-form'));
    });
});
