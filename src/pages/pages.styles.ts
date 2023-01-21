import styled from 'styled-components';
import { media, mixins } from '../styles';

export const NotFoundMain = styled.section`
    text-align: center;
    padding: 40px 0 100px 0;

    h1 {
        color: var(--divider-color);
        font-size: 140px;

        ${media.laptop} {
            font-size: 300px;
        }
    }

    p {
        margin: 0 auto 40px;
        max-width: 400px;
    }

    a {
        color: var(--primary-color-dark);
    }
`;

export const LogInMain = styled.section`
    height: 100vh;
    overflow: hidden;
    width: 100%;
    ${mixins.flexBetween}

    p {
        font-size: var(--space-sm);
    }

    a {
        color: var(--primary-color);
    }
`;

export const LogInForm = styled.div`
    background-color: var(--primary-color-text);
    border-radius: var(--space-xl);
    margin: -40px auto 0;
    padding: var(--space-xl) var(--space-xl);
    width: 90%;

    ${media.laptop} {
        padding: 0 40px;
    }

    form {
        button {
            margin-bottom: var(--space-xl);
        }
    }
`;

export const LogInFormBottom = styled.div`
    ${mixins.flexBetween}
    margin-bottom:var(--space-xl);

    label,
    input[type='checkbox'] {
        margin-bottom: 0;
        margin-right: 5px;
    }
    a {
        color: var(--primary-color);
        justify-self: flex-end;
    }
`;

export const Logo = styled.div`
    /* text-align: center; */

    a {
        color: var(--primary-color);
        display: block;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 40px;
        padding: var(--space-xxl) var(--space-xxl) var(--space-xxl) 0;
        text-align: center;
        /* text-decoration: none; */
    }
`;

export const LogInImage = styled.div`
    background-blend-mode: multiply;
    background-color: var(--primary-color);
    background-image: url('https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--primary-color-text);
    justify-content: center;
    text-align: center;
    width: 100%;
    /* padding: 80px 0; */
    display: none;

    ${media.laptop} {
        height: 100%;
        ${mixins.flexColumn}
    }

    ul {
        li {
            ${mixins.inlineBlock}
            margin: 0 var(--space-xxl);

            a {
                color: var(--primary-color-text);
                font-size: var(--space-lg);

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export const RegisterMain = styled.section`
    height: 100vh;
    overflow: hidden;
    width: 100%;
    ${mixins.flexBetween}

    p {
        font-size: var(--space-sm);
    }

    a {
        color: var(--primary-color);
    }
`;

export const RegisterForm = styled.div`
    background-color: var(--primary-color-text);
    border-radius: var(--space-xl);
    margin: -40px auto 0;
    padding: var(--space-xl) var(--space-xl);
    width: 90%;

    ${media.laptop} {
        padding: 0 40px;
    }

    form {
        button {
            margin-bottom: var(--space-xl);
        }
    }
`;

export const RegisterFormBottom = styled.div`
    ${mixins.flexBetween}
    margin-bottom:var(--space-xl);

    label,
    input[type='checkbox'] {
        margin-bottom: 0;
        margin-right: 5px;
    }
    a {
        color: var(--primary-color);
        justify-self: flex-end;
    }
`;

export const RegisterImage = styled.div`
    display: none;
    background-blend-mode: multiply;
    background-color: var(--primary-color);
    background-image: url('https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--primary-color-text);
    justify-content: center;
    text-align: center;
    width: 100%;
    /* padding: 80px 0; */

    ${media.laptop} {
        height: 100%;
        ${mixins.flexColumn}
    }

    ul {
        li {
            ${mixins.inlineBlock}
            margin: 0 var(--space-xxl);

            a {
                color: var(--primary-color-text);
                font-size: var(--space-lg);

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;
