import React from 'react';
import { Hero, Card, ListProperty, TopCities } from '../components';
import { Wrapper, Grid } from '../styles/elements';
import data from '../assets/json/properties.json';
import cities from '../assets/json/topCities.json';

function Home() {
    return (
        <section>
            <Hero />
            <TopCities cities={cities} />
            <ListProperty />
            <Wrapper>
                <h2>card</h2>
                <Grid>
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                    <Card data={data[0]} />
                </Grid>
            </Wrapper>
        </section>
    );
}

export default Home;
