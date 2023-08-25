import axios from 'axios';
import { IProperty } from './model/property';

export const getUrl = (path: string, environment?: string) => `http://localhost:4200${path}`;

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
