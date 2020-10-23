import React from 'react';
import { Card, PropertyCard } from '../components';
import { Button, Grid, Container } from '../components/elements';

function Typography() {
    const card = {
        name: 'house 1',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
        address: '567 Marconi Dr.Pasadena, MD 21122',
        price: 500,
        bedrooms: 3,
        bathrooms: 2,
        area: 1000,
    };
    return (
        <>
            <Container>
                <h2>card</h2>
                <Grid>
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                </Grid>

            </Container>

            <Container>
                <h2>property Card</h2>
                <PropertyCard />
            </Container>

            <Container>
                <h2>buttons</h2>
                <Button shadow>Join Group</Button>
                <Button secondary>login</Button>
                <Button>Register</Button>
            </Container>
        </>
    );
}

export default Typography;
