import { CardsList } from '../components';
import { Wrapper } from '../styles/elements';
import { useQuery } from 'react-query';

export const Rent = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/properties').then((res) => res.json()));

    if (isLoading) return <p>Loading...</p>;

    return (
        <section>
            <Wrapper>
                <CardsList data={data[0]} />
            </Wrapper>
        </section>
    );
};
