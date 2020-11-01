import React from 'react';
import data from '../assets/json/properties.json';
import { Card, Hero, PropertyCard } from '../components';
import { Button, Grid, Container } from '../styles/elements';

function Typography() {
    return (
        <>
            <Hero />
            <Container>
                <h2>data</h2>
                <Grid>
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
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
