import React from 'react';
import styled from 'styled-components';
import { PropertyImages, PropertyOwner, PropertyInfo } from '../components';
import { mixins, media } from '../styles';
import { Wrapper } from '../styles/elements';

const PropertyMain = styled.article`
    padding: 80px 0 100px;

    ${media.laptop} {
        ${mixins.flexBetween}
        align-items:flex-start;
    }
`;

function Property() {
    return (
        <Wrapper>
            <PropertyMain>
                <section>
                    <PropertyImages />
                    <PropertyInfo />
                </section>
                <PropertyOwner />
            </PropertyMain>
        </Wrapper>
    );
}

export default Property;
