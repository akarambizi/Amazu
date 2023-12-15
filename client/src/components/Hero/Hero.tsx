import { Title, Wrapper } from '../../styles/elements';
import * as Styles from './Hero.styles';
import { HeroForm } from './HeroForm';

export const Hero = () => {
    return (
        <Styles.HeroContainer>
            <Wrapper>
                <Title marginBottom="var(--space-xl)">Discover Your Next Rental</Title>
                <HeroForm />
            </Wrapper>
        </Styles.HeroContainer>
    );
};
