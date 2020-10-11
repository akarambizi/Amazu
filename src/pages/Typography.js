import React from 'react';
import { Card } from '../components';
import { Button } from '../components/elements';

function Typography() {
    const card = {
        name: 2,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
        address: '567 Marconi Dr.Pasadena, MD 21122',
        price: 500,
        bedrooms: 3,
        bathrooms: 2,
        area: 1000,
    };
    return (
        <div>
            <h2>card</h2>
            <Card data={card} />

            <h2>buttons</h2>
            <Button shadow>Join Group</Button>
            <Button secondary>login</Button>
            <Button>Register</Button>
        </div>
    );
}

export default Typography;
