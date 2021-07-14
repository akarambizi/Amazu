import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Anchor, Text } from '../styles/elements';
import { mixins } from '../styles';
import { ReactComponent as IconAreaSvg } from '../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const CardWrapper = styled.article`
    margin-bottom: 24px;
    border: 1px solid var(--secondary-text-color-light);
    padding: 4px 6px;
    border-radius: 10px;
`;

const CardImageLink = styled.a`
    display: block;
    position: relative;

    &:hover,
    &:focus {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        border-radius: 12px;
        border: 3px solid var(--primary-color);
        content: '';
        height: 100%;
        left: -3px;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: -3px;
        transition: opacity 0.2s ease-out;
        width: 100%;
        z-index: 100;
    }

    img {
        border-radius: 10px;
        display: block;
        height: 100%;
        object-fit: cover;
        max-height: 220px;
        margin: 0 auto;
        position: relative;
        width: 100%;
    }
`;

const CardContent = styled.div`
    border-bottom: 1px solid var(--secondary-text-color-light);
    padding: 10px 0;
`;

const CardLink = styled(Anchor)`
    &:hover,
    &:focus {
        p {
            color: var(--primary-color);
        }
    }

    p {
        transition: all 0.4s ease;
    }
`;

const CardIcons = styled.div`
    ${mixins.flexBetween}
    padding: 10px 0;

    svg {
        height: 20px;
        margin-right: 5px;
        vertical-align: middle;

        path {
            fill: var(--secondary-text-color);
        }
    }

    span {
        ${mixins.inlineBlock}
        color: var(--secondary-text-color);
    }
`;
function Card({ data }) {
    const {
        title,
        images,
        location: { fullAdress },
        bedRooms,
        bathRooms,
        area,
        price,
    } = data;
    return (
        <CardWrapper>
            <CardImageLink href="/typography">
                <img src={images[0]} alt={title} />
            </CardImageLink>
            <div>
                <CardContent>
                    <CardLink href="/">
                        <Text bold>{title}</Text>
                    </CardLink>
                    <Text>{fullAdress}</Text>
                    <Text bold secondary>{`$${price}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text aria-label="Bedrooms" title="Bedrooms">
                        <IconBedSvg />
                        <span>{bedRooms}</span>
                    </Text>
                    <Text aria-label="Bathrooms" title="Bathrooms">
                        <IconBathRoomSvg />
                        <span>{bathRooms}</span>
                    </Text>
                    <Text aria-label="Area" title="Area">
                        <IconAreaSvg />
                        <span>{`${area} ft`}</span>
                        <sup>2</sup>
                    </Text>
                </CardIcons>
            </div>
        </CardWrapper>
    );
}

Card.defaultProps = {
    data: {},
};

Card.propTypes = {
    data: PropTypes.shape({
        area: PropTypes.number,
        bathRooms: PropTypes.number,
        bedRooms: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        location: PropTypes.shape({
            fullAdress: PropTypes.string.isRequired,
        }),
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default Card;
