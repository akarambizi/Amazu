import { createGlobalStyle } from "styled-components";
import { colors, fonts, spaces } from "./variables";
import normalize from "./normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        ${colors};
        ${fonts};
        ${spaces};
    }

    body {
        color: var(--primary-text-color);
        font-family: var(--font-primary);
        width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-family: var(--font-secondary);
    }

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        font-family: var(--font-primary);
        font-size: var(--space-sm);
        letter-spacing: 0px;
        line-height: var(--space-sm);
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        display: inline-block;

        &:hover {
            p {
                color: var(--primary-color-dark);
            }
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            a {
                color: var(--primary-text-color);
                font-family: var(--font-secondary);
                font-size: var(--space-sm);
                letter-spacing: 0px;
                line-height: var(--space-sm);
                padding: 10px;
                text-decoration: none;
                transition: all 0.2s ease-in-out;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default GlobalStyles;
