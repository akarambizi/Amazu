/* eslint-disable @typescript-eslint/no-var-requires */
const properties = require('./properties.json');
const topCities = require('./top-cities.json');

module.exports = () => ({
    properties: properties,
    'top-cities': topCities,
});
