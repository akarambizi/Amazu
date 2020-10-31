import React from 'react';
import { Hero, Card } from '../components';
import { Container, Grid } from '../components/elements';
import data from '../assets/json/properties.json';

function HomePage() {
    return (
        <section>
            <Hero />
            <Container>
                <h2>card</h2>
                <Grid>
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                </Grid>
            </Container>
        </section>
    );
}

export default HomePage;
