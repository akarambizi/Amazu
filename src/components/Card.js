import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Anchor, Text } from '../styles/elements';
import { mixins } from '../styles';
import { ReactComponent as IconAreaSvg } from '../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const CardWrapper = styled.article`
    margin-bottom: var(--space-xxl);
    /* border: 1px solid var(--secondary-text-color-light); */
    /* padding: 4px 10px; */
    border-radius: 5px;
    /*  horizontal-card */
    /* ${mixins.flex}
    align-items: flex-start */
    transition: all 0.2s ease;
    box-shadow: 0 var(--space-md) 64px -16px rgb(46 55 77 / 10%);

    &:hover {
        box-shadow: 0 var(--space-md) 64px -16px rgb(46 55 77 / 24%);
    }
`;

const CardImageLink = styled.a`
    display: block;
    position: relative;

    img {
        /* border-radius: 10px; */
        display: block;
        height: 100%;
        object-fit: cover;
        max-height: 180px;
        margin: 0 auto;
        position: relative;
        width: 100%;
    }
`;

const CardContent = styled.div`
    border-bottom: 1px solid var(--secondary-text-color-light);
    padding: 5px 10px;
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
    ${mixins.flex}
    /* justify-content: flex-between; */
    gap: var(--space-xxl);
    padding: 10px;

    svg {
        height: var(--space-xl);
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
        location: { fullAdress },
    } = data;
    return (
        <CardWrapper>
            <CardImageLink href="/typography">
                <img src={data.images[0]} alt={data.title} />
            </CardImageLink>
            <div>
                <CardContent>
                    <CardLink href="/">
                        <Text bold>{data.title}</Text>
                    </CardLink>
                    <Text>{fullAdress}</Text>
                    <Text bold secondary>{`$${data.price}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text aria-label="Bedrooms" title="Bedrooms">
                        <IconBedSvg />
                        <span>{data.bedRooms}</span>
                    </Text>
                    <Text aria-label="Bathrooms" title="Bathrooms">
                        <IconBathRoomSvg />
                        <span>{data.bathRooms}</span>
                    </Text>
                    <Text aria-label="Area" title="Area">
                        <IconAreaSvg />
                        <span>{`${data.area} ft`}</span>
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
