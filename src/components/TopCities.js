import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Text, Wrapper } from '../styles/elements';
import { mixins } from '../styles';

const TopCitiesWrapper = styled.section`
    padding: 30px 0 90px;

    h3 {
        margin-bottom: 20px;
    }
`;

const TopCityLink = styled(Link)`
    ${mixins.flex};
    background-color: var(--primary-color-text);
    border-radius: 8px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    font-weight: 700;
    gap: 16px;
    margin-bottom: 32px;
    padding: 12px;

    &:hover {
        background-color: var(--secondary-text-color-light);
    }

    img {
        border-radius: 5px;
        filter: brightness(90%);
        object-fit: cover;
        margin-right: 10px;
    }
`;

function TopCities({ cities }) {
    return (
        <TopCitiesWrapper>
            <Wrapper>
                <Text heading marginBottom="32px" centered>
                    Expand your search and check out one of these trending cities.
                </Text>
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
