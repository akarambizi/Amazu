import { Hero, HomeCards, ListProperty, TopCities } from '../components';
import { useQuery } from 'react-query';

export const Home = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/top-cities').then((res) => res.json()));

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Hero />
            <TopCities cities={data} />
            <ListProperty />
            <HomeCards />
        </>
    );
};
