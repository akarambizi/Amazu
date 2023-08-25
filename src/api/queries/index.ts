import { UseQueryOptions, useQuery } from 'react-query';
import { getPropertiesData } from '..';
import { AxiosError } from 'axios';
import { IProperty } from '../model/property';

const getSearchResultsKey = (query: string) => ['searchResultsData', query];

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
