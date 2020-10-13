import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Anchor, Text } from './elements';
import { mixins } from '../styles';
import { ReactComponent as IconAreaSvg } from '../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const CardContainer = styled.article`
    max-width: 100%;
`;

const CardImage = styled.a`
    position: relative;
    display: block;

    &:hover,
    &:focus {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        content: '';
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        top: -3px;
        left: -3px;
        z-index: 100;
        border: 3px solid var(--primary-color);
        border-radius: 12px;
        transition: opacity 0.1s ease-out;
        pointer-events: none;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: relative;
        margin: 0 auto;
    }
`;

const CardContent = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color);
`;

const CardLink = styled(Anchor)`
    &:hover,
    &:focus {
        p {
            color: var(--primary-color);
        }
    }

    p {
        transition: 0.2s ease;
    }
`;

const CardIcons = styled.div`
    padding: 10px 0;
    ${mixins.flexBetween}

    svg {
        height: 20px;
        vertical-align: bottom;
        margin-right: 5px;
    }
`;
function Card({ data }) {
    const { name, image, address, bedrooms, bathrooms, area, price } = data;
    return (
        <CardContainer>
            <CardImage href="/typography">
                <img src={image} alt={name} />
            </CardImage>
            <div>
                <CardContent>
                    <CardLink href="/">
                        <Text bold>{name}</Text>
                    </CardLink>
                    <Text>{address}</Text>
                    <Text bold secondary>{`$${price}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text title="Bedrooms">
                        <IconBedSvg />
                        {bedrooms}
                    </Text>
                    <Text title="Bathrooms">
                        <IconBathRoomSvg />
                        {bathrooms}
                    </Text>
                    <Text title="Area">
                        <IconAreaSvg />
                        {`${area} ft`}
                        <sup>2</sup>
                    </Text>
                </CardIcons>
            </div>
        </CardContainer>
    );
}

Card.defaultProps = {
    data: {},
};

Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        bedrooms: PropTypes.number,
        bathrooms: PropTypes.number,
        area: PropTypes.number,
    }),
};

export default Card;
