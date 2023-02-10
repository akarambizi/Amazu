import { useQuery } from 'react-query';
import { Hero, HomeCards, ListProperty, TopCities } from '../components';

export const Home = () => {
    const { data } = useQuery('citiesData', () => fetch('http://localhost:4200/top-cities').then((res) => res.json()));

    return (
        <>
            <Hero />
            <TopCities cities={data} />
            <ListProperty />
            <HomeCards />
        </>
    );
};
