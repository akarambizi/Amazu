import { Grid, Text, Wrapper } from '../../styles/elements';
import * as Styles from './TopCities.styles';
import { ITopCitiesProps } from './TopCities.types';

export const TopCities = (props: ITopCitiesProps) => {
    return (
        <Styles.TopCitiesWrapper>
            <Wrapper>
                <Text heading marginBottom="32px" centered>
                    Expand your search and check out one of these trending cities.
                </Text>
                <Grid>
                    {props.cities?.map(({ name, image }) => (
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
