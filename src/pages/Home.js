import React from 'react';
import { Hero, Card, ListProperty } from '../components';
import { Container, Grid } from '../styles/elements';
import data from '../assets/json/properties.json';

function Home() {
    return (
        <section>
            <Hero />
            <ListProperty />
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

export default Home;
