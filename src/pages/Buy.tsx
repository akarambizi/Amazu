import { CardsList, CardsListLoading } from '../components';
import { Wrapper } from '../styles/elements';
import { useQuery } from 'react-query';

export const Buy = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/properties').then((res) => res.json()));

    return (
        <section>
            <Wrapper>{isLoading ? <CardsListLoading /> : <CardsList data={data[0]} />}</Wrapper>
        </section>
    );
};
