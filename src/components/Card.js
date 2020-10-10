import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
    const { name, image, address, bedrooms, bathrooms, area, price }= data;
    return (
        <article>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>{address}</p>
                <p>{price}</p>
            </div>
            <div>
                <p>{bedrooms}</p>
                <p>{bathrooms}</p>
                <p>{area}</p>
            </div>
        </article>
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
