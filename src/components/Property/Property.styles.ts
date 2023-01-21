import styled from 'styled-components';
import { mixins, media } from '../../styles';
import { IPropertyInfoSectionProps } from './Property.types';

export const PropertyMain = styled.article`
    padding: 80px 0 100px;

    ${media.laptop} {
        ${mixins.flexBetween}
        align-items: flex-start;
    }
`;

export const PropertyInfoContainer = styled.div`
    /* max-width: 885px; */
    color: var(--secondary-text-color);
`;

export const PropertyInfoSection = styled.div<IPropertyInfoSectionProps>`
    ${mixins.grid};
    ${({ max }) => (max ? mixins.flexBetween : mixins.grid)};
    grid-template-columns: repeat(3, 1fr);
    /* max-width: ${(props) => (props.max ? '100%' : '570px')}; */
    margin-left: auto;
    margin-bottom: 25px;
    border-top: ${({ border }) => border && ' 1px solid var(--divider-color)'};
    padding-top: ${({ border }) => border && ' var(--space-xl)'};

    p {
        font-size: var(--space-md);
        line-height: 19px;
        letter-spacing: 0px;
        margin-bottom: 10px;
    }

    span {
        font-size: var(--space-xl);
        line-height: var(--space-xl);
        font-weight: 700;
        color: var(--primary-text-color);
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }

    svg {
        height: var(--space-xl);
        display: inline-block;
        vertical-align: middle;
    }

    h4 {
        align-self: start;
        font-size: var(--space-xxl);
    }

    .description {
        grid-column: span 2;
        line-height: var(--space-xxl);
        color: var(--secondary-text-color);
    }

    .price {
        p {
            font-size: 30px;
            color: var(--primary-color);
            font-weight: 800;
        }
    }

    .address {
        p {
            font-size: 22px;
            font-weight: 800;
        }
    }
`;

export const PropertyOwnerContainer = styled.section`
    text-align: center;
    border: 1px solid var(--divider-color);
    min-width: 250px;
`;
export const PropertyOwnerTop = styled.div`
    padding: var(--space-lg) 15px var(--space-xxl);

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: var(--space-xxl);
    }

    a {
        background-color: var(--primary-color-light);
        display: block;
        padding: var(--space-xxl) 0;
        color: var(--primary-text-color);
        text-decoration: none;
    }
    .rating,
    .properties {
        color: var(--secondary-text-color);
    }
`;

export const PropertyOwnerbottom = styled.div`
    background-color: var(--divider-color);
    padding: 15px;
`;

export const PropertyImagesContainer = styled.div`
    height: 270px;
    box-sizing: border-box;
    margin-bottom: 40px;
    ${mixins.flexBetween}
`;

export const ImageSection = styled.div`
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

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;
