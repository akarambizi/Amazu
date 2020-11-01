import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Anchor, Text } from '../styles/elements';
import { mixins } from '../styles';
import { ReactComponent as IconAreaSvg } from '../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const CardContainer = styled.article`
    max-width: 100%;
`;

const CardImageLink = styled.a`
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
        <CardContainer>
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
                    <Text title="Bedrooms">
                        <IconBedSvg />
                        {bedRooms}
                    </Text>
                    <Text title="Bathrooms">
                        <IconBathRoomSvg />
                        {bathRooms}
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
