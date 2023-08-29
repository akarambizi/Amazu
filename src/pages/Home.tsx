import { useMemo } from 'react';
import { useCitiesData } from '../api/queries';
import { Hero, HomeCards, ListProperty, TopCities } from '../components';

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
