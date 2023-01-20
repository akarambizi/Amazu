import { Grid, Text, Wrapper } from '../../styles/elements';
import { ITopCitiesProps, ICity } from './TopCities.types';
import * as Styles from './TopCities.styles';

export const TopCities = ({ cities }: ITopCitiesProps) => {
    return (
        <Styles.TopCitiesWrapper>
            <Wrapper>
                <Text heading marginBottom="32px" centered>
                    Expand your search and check out one of these trending cities.
                </Text>
                <Grid>
                    {cities.map(({ name, image }: ICity) => (
                        <Styles.TopCityLink to={`/cities/${name}`} key={name}>
                            <img src={image} alt={name} height="64px" width="64px" />
                            <Text>{name}</Text>
                        </Styles.TopCityLink>
                    ))}
                </Grid>
            </Wrapper>
        </Styles.TopCitiesWrapper>
    );
};
