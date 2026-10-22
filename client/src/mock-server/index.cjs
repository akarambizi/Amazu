/* eslint-disable @typescript-eslint/no-var-requires */
const properties = require('./data/properties.json');
const cities = require('./data/cities.json');

module.exports = () => ({
    properties,
    cities,
});
