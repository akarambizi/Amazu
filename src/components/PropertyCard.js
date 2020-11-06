import React from 'react';
import styled from 'styled-components';
import PropertyImages from './property/PropertyImages';
import PropertyOwner from './property/PropertyOwner';
import PropertyInfo from './property/PropertyInfo';
import { mixins, media } from '../styles';

const PropertyCardContainer = styled.article`
    ${media.laptop} {
        ${mixins.flexBetween}
        align-items:flex-start;
    }
`;

function PropertyCard() {
    return (
        <PropertyCardContainer>
            <section>
                <PropertyImages />
                <PropertyInfo />
            </section>
            <PropertyOwner />
        </PropertyCardContainer>
    );
}

export default PropertyCard;
