import { Form, Title, Wrapper } from '../../styles/elements';
import * as Styles from './Hero.styles';

export const Hero = () => {
    return (
        <Styles.HeroContainer>
            <Wrapper>
                <Title marginBottom="var(--space-xl)">Discover Your Next Rental</Title>
                <Form>
                    <input type="text" name="search" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
                    <button type="submit">search</button>
                </Form>
            </Wrapper>
        </Styles.HeroContainer>
    );
};
