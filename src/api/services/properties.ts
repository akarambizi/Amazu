import axios from 'axios';
import { IProperty } from '../../../server/src/models';
import { getUrl } from './utils';

/**
 * Gets properties data.
 * @param {string} query - The search query string.
 * @returns {Promise<IProperty[]>}  array of properties results.
 */
export const getPropertiesData = async (query = ''): Promise<IProperty[]> => {
    const url = getUrl('/properties');
    const response = await axios.get(`${url}${query}`);
    return response?.data ?? [];
};
