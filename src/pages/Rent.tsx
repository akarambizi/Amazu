import { useQuery } from 'react-query';
import { CardsList, CardsListLoading } from '../components';
import { Wrapper } from '../styles/elements';

export const Rent = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/properties').then((res) => res.json()));

    return (
        <section>
            <Wrapper>{isLoading ? <CardsListLoading /> : <CardsList data={data[1]} />}</Wrapper>
        </section>
    );
};
