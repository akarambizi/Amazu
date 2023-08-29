import { UseQueryOptions, useQuery } from 'react-query';
import { getCitiesData, getPropertiesData } from '..';
import { AxiosError } from 'axios';
import { IProperty, ICity } from '../model';

const getSearchResultsKey = (query: string) => ['searchResultsData', query];
const getCitiesKey = (query: string) => ['citiesData', query];

/**
 * A custom hook that fetches search results data.
 * @param {string} query - The search query string.
 * @param [options] - Optional options for the `useQuery` hook.
 * @returns {QueryObserverResult<IProperty[], AxiosError>} The result of the `useQuery` hook.
 */
export const usePropertiesData = (query: string, options?: UseQueryOptions<IProperty[], AxiosError, IProperty[], ReturnType<typeof getSearchResultsKey>>) => {
    return useQuery({
        queryKey: getSearchResultsKey(query),
        queryFn: () => getPropertiesData(query),
        refetchOnWindowFocus: false,
        retry: false,
        ...options,
    });
};

/**
 * A custom hook that fetches cities  data.
 * @param {string} query - The search query string.
 * @param [options] - Optional options for the `useQuery` hook.
 * @returns {QueryObserverResult<ICity[], AxiosError>} The result of the `useQuery` hook.
 */
export const useCitiesData = (query: string, options?: UseQueryOptions<ICity[], AxiosError, ICity[], ReturnType<typeof getSearchResultsKey>>) => {
    return useQuery({
        queryKey: getCitiesKey(query),
        queryFn: () => getCitiesData(query),
        refetchOnWindowFocus: false,
        retry: false,
        ...options,
    });
};
