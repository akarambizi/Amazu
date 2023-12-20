/**
 * Gets the api url.
 * @param {string} path - The path to append to the base URL.
 * @returns {string} The api url.
 */
export const getUrl = (path: string) => {
    let baseUrl;
    switch (process.env.REACT_APP_API_ENV) {
        case 'dev':
            baseUrl = 'http://localhost:5000'; // dev server
            break;
        case 'mock':
            baseUrl = 'http://localhost:4200'; // mock server
            break;
        default:
            baseUrl = ''; // prod
    }

    return `${baseUrl}${path}`;
};
