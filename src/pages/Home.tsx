import { Hero, HomeCards, ListProperty, TopCities } from '../components';
import cities from '../assets/json/topCities.json';

export const Home = () => {
    return (
        <>
            <Hero />
            <TopCities cities={cities} />
            <ListProperty />
            <HomeCards />
        </>
    );
};
