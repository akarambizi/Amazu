import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import colors from './colors';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
    ${normalize}
    :root {
        ${colors};
        ${fonts}
    }

    body {
        font-family:var(--font-tertiary);
    }
`;

export default GlobalStyles;
