import axios from 'axios';
import { IProperty } from '../queries/model/property';

export const getUrl = (path: string, environment?: string) => `http://localhost:4200${path}`;

/**
 * Gets search results data.
 * @param {string} query - The search query string.
 * @returns {Promise<IProperty[]>}  array of search results.
 */
export const getSearchResultsData = async (query: string): Promise<IProperty[]> => {
    const url = getUrl('/properties');
    const response = await axios.get(`${url}${query}`);
    return response.data;
};
