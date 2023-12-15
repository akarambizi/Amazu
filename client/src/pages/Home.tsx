import { useMemo } from 'react';
import { Hero, HomeCards, ListProperty, TopCities } from '../components';
import { useCitiesData } from '../hooks';

export const Home = () => {
    const { data } = useCitiesData('');
    const citiesData = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);
    return (
        <>
            <Hero />
            <TopCities cities={citiesData} />
            <ListProperty />
            <HomeCards />
        </>
    );
};
