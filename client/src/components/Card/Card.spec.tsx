import { render, screen } from '@testing-library/react';
import { ICardProps } from './Card.types';
import { Card } from './Card';

const mockData: ICardProps = {
    data: {
        images: ['test-image.jpg'],
        title: 'Test Title',
        location: { fullAdress: 'Test Address' },
        price: 100,
        bedRooms: 2,
        bathRooms: 1,
        area: 1000,
    },
};

describe('Card', () => {
    beforeEach(() => {
        render(<Card {...mockData} />);
    });

    it('renders image correctly', () => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', 'test-image.jpg');
        expect(image).toHaveAttribute('alt', 'Test Title');
    });

    it('renders title correctly', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders address correctly', () => {
        expect(screen.getByText('Test Address')).toBeInTheDocument();
    });

    it('renders price correctly', () => {
        expect(screen.getByText('$100')).toBeInTheDocument();
    });

    it('renders bedrooms correctly', () => {
        const bedrooms = screen.getByLabelText('Bedrooms');
        expect(bedrooms).toBeInTheDocument();
        expect(bedrooms).toHaveTextContent('2');
    });

    it('renders bathrooms correctly', () => {
        const bathrooms = screen.getByLabelText('Bathrooms');
        expect(bathrooms).toBeInTheDocument();
        expect(bathrooms).toHaveTextContent('1');
    });

    it('renders area correctly', () => {
        const area = screen.getByLabelText('Area');
        expect(area).toBeInTheDocument();
        expect(area).toHaveTextContent('1000 ft');
    });
});
