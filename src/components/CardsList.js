import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Grid } from '../styles/elements';

function CardsList({ data }) {
    return (
        <Grid transition spacing>
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
        </Grid>
    );
}

CardsList.defaultProps = {
    data: {},
};

CardsList.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        location: PropTypes.shape({
            fullAdress: PropTypes.string.isRequired,
        }),
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default CardsList;
