import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Title, Text, Wrapper } from '../styles/elements';
import { mixins } from '../styles';

const TopCitiesWrapper = styled.section`
    padding: 60px 0 80px;
    h3 {
        margin-bottom: 20px;
    }
`;

const TopCityLink = styled(Link)`
    ${mixins.flex};
    gap: 16px;
    margin-bottom: 20px;
    font-weight: 700;
`;

function TopCities({ cities }) {
    return (
        <TopCitiesWrapper>
            <Wrapper>
                <Title as="p" marginBottom="24px">
                    Expand your search and check out one of these trending cities.
                </Title>
                <Grid>
                    {cities.map(({ name, image }) => (
                        <TopCityLink to={`/cities/${name}`} key={name}>
                            <img src={image} alt={name} height="64px" width="64px" />
                            <Text>{name}</Text>
                        </TopCityLink>
                    ))}
                </Grid>
            </Wrapper>
        </TopCitiesWrapper>
    );
}

TopCities.defaultProps = {
    cities: [],
};

TopCities.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default TopCities;
