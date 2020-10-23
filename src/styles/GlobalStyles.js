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

    h1,h2,h3,h4,h5,h6,p {
        margin:0;
    }
`;

export default GlobalStyles;
