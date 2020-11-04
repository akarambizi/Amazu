import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import colors from './colors';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        ${colors};
        ${fonts};
    }

    body {
        font-family:var(--font-tertiary);
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            a {
                color: var(--primary-text-color);
                font-family: var(--font-tertiary);
                font-size: 14px;
                letter-spacing: 0px;
                line-height: 14px;
                padding: 10px;
                text-decoration:none;
                transition: all .2s ease-in-out;

                &:hover {
                    color: var(--primary-color)
                }
            }
        }
    }
`;

export default GlobalStyles;
