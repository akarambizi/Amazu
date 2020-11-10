import React from 'react';
import { Hero, HomeCards, ListProperty, TopCities } from '../components';
import cities from '../assets/json/topCities.json';

function Home() {
    return (
        <section>
            <Hero />
            <TopCities cities={cities} />
            <ListProperty />
            <HomeCards />
        </section>
    );
}

export default Home;
