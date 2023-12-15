import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ListProperty } from './ListProperty';

describe('ListProperty', () => {
    beforeEach(() => {
        render(
            <Router>
                <ListProperty />
            </Router>
        );
    });

    test('renders without crashing', () => {
        const listPropertyElement = screen.getByTestId('list-property');
        expect(listPropertyElement).toBeInTheDocument();
    });

    test('renders correct text', () => {
        const headingElement = screen.getByText(/List your property on Amazu to connect to qualified tenants across the largest rental network./i);
        expect(headingElement).toBeInTheDocument();

        const listItemElement = screen.getByText(/Accept rental applications/i);
        expect(listItemElement).toBeInTheDocument();
    });

    test('renders correct link', () => {
        const linkElement = screen.getByLabelText('Sign In');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/signup');
    });
});
