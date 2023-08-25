import { useMemo } from 'react';
import { usePropertiesData } from '../api/queries';
import { CardsList, CardsListLoading, Pagination } from '../components';
import { Title, Wrapper } from '../styles/elements';

export const SearchResults = () => {
    const { isLoading, data } = usePropertiesData('');
    const searchedProperties = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <section>
            <Wrapper>
                <Title marginBottom="50px">Search Results: 20 properties</Title>
                {isLoading && searchedProperties && searchedProperties?.length > 0 ? <CardsListLoading /> : <CardsList data={searchedProperties[0]} />}
                <Pagination />
            </Wrapper>
        </section>
    );
};
