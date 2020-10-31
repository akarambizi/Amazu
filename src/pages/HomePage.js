import React from 'react';
import { Card, Hero } from '../components';
import { Container, Grid } from '../components/elements';

function HomePage() {
    return (
        <section>
            <Hero />
            <Container>
                <h2>card</h2>
                {/* <Grid>
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                    <Card data={card} />
                </Grid> */}
            </Container>
        </section>
    );
}

export default HomePage;
