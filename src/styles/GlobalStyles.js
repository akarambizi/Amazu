import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Roboto&display=swap');
    :root {
        ${colors};
        ${fonts}
    }
`;

export default GlobalStyles;
