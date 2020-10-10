import React from 'react';
import { Card } from '../components';

function HomePage() {
    const card = {
        name: 2,
        image:
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
        address: '567 Marconi Dr.Pasadena, MD 21122',
        price: 500,
        bedrooms: 3,
        bathrooms: 2,
        area: 1000,
    };
    return (
        <section>
            <p>homepage</p>
            <Card data={card} />
        </section>
    );
}

export default HomePage;
