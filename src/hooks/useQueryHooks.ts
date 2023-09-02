import { AxiosError } from 'axios';
import { UseQueryOptions, useQuery } from 'react-query';
import { ICity, IProperty, getCitiesData, getPropertiesData } from '../api';
import { getCitiesKey, getPropertiesKey } from './utils';

/**
 * A custom hook that fetches properties data.
 * @param {string} query - The search query string.
 * @param [options] - Optional options for the `useQuery` hook.
 * @returns {QueryObserverResult<IProperty[], AxiosError>} The result of the `useQuery` hook.
 */
export const usePropertiesData = (query: string, options?: UseQueryOptions<IProperty[], AxiosError, IProperty[], ReturnType<typeof getPropertiesKey>>) => {
    return useQuery({
        queryKey: getPropertiesKey(query),
        queryFn: () => getPropertiesData(query),
        refetchOnWindowFocus: false,
        retry: false,
        ...options,
    });
};

/**
 * A custom hook that fetches cities data.
 * @param {string} query - The search query string.
 * @param [options] - Optional options for the `useQuery` hook.
 * @returns {QueryObserverResult<ICity[], AxiosError>} The result of the `useQuery` hook.
 */
export const useCitiesData = (query: string, options?: UseQueryOptions<ICity[], AxiosError, ICity[], ReturnType<typeof getCitiesKey>>) => {
    return useQuery({
        queryKey: getCitiesKey(query),
        queryFn: () => getCitiesData(query),
        refetchOnWindowFocus: false,
        retry: false,
        ...options,
    });
};
