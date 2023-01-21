import data from '../assets/json/properties.json';
import { CardsList } from '../components';
import { Wrapper } from '../styles/elements';

export const Buy = () => {
    return (
        <section>
            <Wrapper>
                <CardsList data={data[0]} />
            </Wrapper>
        </section>
    );
};
