import React from 'react';
import { Hero, HomepageCards, ListProperty, TopCities } from '../components';
import cities from '../assets/json/topCities.json';

function Home() {
    return (
        <section>
            <Hero />
            <TopCities cities={cities} />
            <ListProperty />
            <HomepageCards />
        </section>
    );
}

export default Home;
