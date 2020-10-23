import React from 'react';
import styled from 'styled-components';
import PropertyImages from './property/PropertyImages';
import PropertyOwner from './property/PropertyOwner';
import { mixins, media } from '../styles';

const PropertyCardTop = styled.section`
    @media ${media.laptop} {
        ${mixins.flexBetween}
    }
`;

function PropertyCard() {
    return (
        <div>
            <PropertyCardTop>
                <PropertyImages />
                <PropertyOwner />
            </PropertyCardTop>
        </div>
    );
}

export default PropertyCard;
