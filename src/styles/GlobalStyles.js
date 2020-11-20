import { createGlobalStyle } from 'styled-components';
import arrowUrl from '../assets/images/icon-angle-down.svg';
import colors from './colors';
import fonts from './fonts';
import mixins from './mixins';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        ${colors};
        ${fonts};
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
        font-size: 14px;
        letter-spacing: 0px;
        line-height: 14px;
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
                font-size: 14px;
                letter-spacing: 0px;
                line-height: 14px;
                padding: 10px;
                text-decoration: none;
                transition: all 0.2s ease-in-out;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }

    form {
        label {
            ${mixins.inlineBlock}
            font-size: 14px;
            margin-bottom: 12px;
            text-transform: capitalize;
        }

        input,
        select,
        textarea {
            border-radius: 8px;
            border: 1px solid var(--secondary-text-color);
            box-sizing: border-box;
            display: block;
            font-size: 16px;
            margin-bottom: 20px;
            outline-color: var(--primary-color);
            padding: 15px;
            text-align: left;
            width: 100%;
        }

        input[type='button'],
        button {
            ${mixins.button}
            text-align:center;
        }

        input[type='radio'],
        input[type='checkbox'] {
            ${mixins.inlineBlock}
            margin-right:20px;
            width: 20px;
        }

        select {
            appearance: none;
            background: url(${arrowUrl});
            background-position: calc(100% - 30px) 50%;
            background-repeat: no-repeat;
            background-size: 14px;
            padding: 12px 36px 12px 12px;
            width: 100%;
        }
    }
`;

export default GlobalStyles;
