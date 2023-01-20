import * as Styles from './Hero.styles';
import { Title, Wrapper } from '../../styles/elements';

export const Hero = () => {
    return (
        <Styles.HeroContainer>
            <Wrapper>
                <Title marginBottom="var(--space-xl)">Discover Your Next Rental</Title>
                <Styles.HeroForm>
                    <input type="text" name="search" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
                    <button type="submit">search</button>
                </Styles.HeroForm>
            </Wrapper>
        </Styles.HeroContainer>
    );
};