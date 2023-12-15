/**
 * Gets the api url.
 * @param {string} path - The path to append to the base URL.
 * @param {string} [environment] - The environment to use. Defaults to "http://localhost:4200".
 * @returns {string} The api url.
 */
export const getUrl = (path: string, environment?: string) => `http://localhost:4200${path}`;
