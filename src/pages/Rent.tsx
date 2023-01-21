import data from '../assets/json/properties.json';
import { CardsList } from '../components';
import { Wrapper } from '../styles/elements';

export const Rent = () => {
    return (
        <section>
            <p>Rent</p>
            <Wrapper>
                <CardsList data={data[0]} />
            </Wrapper>
        </section>
    );
};