import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TopCities } from './TopCities';
import { ITopCitiesProps } from './TopCities.types';

const mockCities: ITopCitiesProps = {
    cities: [
        { name: 'City1', state: 'Stat1', image: 'image1.png' },
        { name: 'City2', state: 'Stat2', image: 'image2.png' },
    ],
};

describe('TopCities', () => {
    beforeEach(() => {
        render(
            <Router>
                <TopCities {...mockCities} />
            </Router>
        );
    });

    test('renders without crashing', () => {
        const topCitiesElement = screen.getByTestId('top-cities');
        expect(topCitiesElement).toBeInTheDocument();
    });

    test('renders correct text', () => {
        const headingElement = screen.getByText(/Expand your search and check out one of these trending cities./i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders correct links', () => {
        mockCities.cities.forEach((city) => {
            const linkElement = screen.getByLabelText(`${city.name} link`);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', `/cities/${city.name}`);
        });
    });
});
