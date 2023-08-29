import axios from 'axios';
import { IProperty, ICity } from './model';

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

/**
 * Gets cities data.
 * @param {string} query - The search query string.
 * @returns {Promise<IProperty[]>}  array of cities results.
 */
export const getCitiesData = async (query = ''): Promise<ICity[]> => {
    const url = getUrl('/cities');
    const response = await axios.get(`${url}${query}`);
    return response?.data ?? [];
};
