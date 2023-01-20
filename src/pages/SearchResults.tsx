import data from '../assets/json/properties.json';
import { CardsList, Pagination } from '../components';
import { Title, Wrapper } from '../styles/elements';

export const SearchResults = () => {
    return (
        <section>
            <Wrapper>
                <Title marginBottom="50px">Search Results: 20 properties</Title>
                <CardsList data={data[0]} />
                <Pagination />
            </Wrapper>
        </section>
    );
};
