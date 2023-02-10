import { useQuery } from 'react-query';
import { CardsList, CardsListLoading, Pagination } from '../components';
import { Title, Wrapper } from '../styles/elements';

export const SearchResults = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/properties').then((res) => res.json()));

    if (isLoading) return <p>Loading...</p>;

    return (
        <section>
            <Wrapper>
                <Title marginBottom="50px">Search Results: 20 properties</Title>
                {isLoading ? <CardsListLoading /> : <CardsList data={data[0]} />}
                <Pagination />
            </Wrapper>
        </section>
    );
};
