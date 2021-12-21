import React from 'react';
import styled from 'styled-components';
import { mixins } from '../../styles';

const PropertyImagesContainer = styled.div`
    height: 270px;
    box-sizing: border-box;
    margin-bottom: 40px;
    ${mixins.flexBetween}
`;

const ImageSection = styled.div`
    height: 100%;
    margin-right: var(--space-xxl);
    img {
        max-width: 280px;
        height: 80px;
        display: block;
        object-fit: cover;
        margin-bottom: 15px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;

function PropertyImages() {
    return (
        <PropertyImagesContainer>
            <ImageSection>
                <img src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="house" />
                <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="house" />
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="house" />
            </ImageSection>
            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="house" />
            </ImageContainer>
        </PropertyImagesContainer>
    );
}

export default PropertyImages;
