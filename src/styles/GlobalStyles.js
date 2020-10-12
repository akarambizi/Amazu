import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import colors from './colors';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
    ${'' /* @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Roboto&display=swap'); */}
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
