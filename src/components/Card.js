import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from './elements';
import { ReactComponent as IconAreaSvg } from '../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const CardContainer = styled.article`
    max-width: 300px;

    img {
        width: 100%;
        border-radius: 10px;
    }
`;

const CardContent = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color);
`;

const CardIcons = styled.div`
    padding: 10px 0;

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
            <a href="/">
                <img src={image} alt={name} />
            </a>
            <div>
                <CardContent>
                    <a href="/">
                        <Text bold>{name}</Text>
                    </a>
                    <Text>{address}</Text>
                    <Text bold secondary>{`$${price}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text display="inline-block" width="calc(100%/3)">
                        <IconBedSvg />
                        {bedrooms}
                    </Text>
                    <Text display="inline-block" width="calc(100%/3)">
                        <IconBathRoomSvg />
                        {bathrooms}
                    </Text>
                    <Text display="inline-block" width="calc(100%/3)">
                        <IconAreaSvg />
                        {`${area}ft2`}
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
