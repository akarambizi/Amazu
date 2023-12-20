import axios from 'axios';
import { ICity } from './cities.types';
import { getUrl } from './utils';

/**
 * Gets cities data.
 * @param {string} query - The search query string.
 * @returns {Promise<ICity[]>}  array of cities results.
 */
export const getCitiesData = async (query = ''): Promise<ICity[]> => {
    const url = getUrl('/cities');
    const response = await axios.get(`${url}${query}`);
    return response?.data ?? [];
};
