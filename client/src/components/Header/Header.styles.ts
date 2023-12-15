import styled, { css } from 'styled-components';
import { media, mixins } from '../../styles';
import { Wrapper } from '../../styles/elements';
import { IIsNavVisible } from './Header.types';

export const HeaderMain = styled.header`
    background-color: var(--primary-color-text);
    border-bottom: 1px solid var(--divider-color);

    ${media.laptopMax} {
        /* TODO: fix hero moving up when the nav is visible */
        ${({ isNavVisible }: IIsNavVisible) => isNavVisible && mixins.positionFixed}
        z-index: 300;
        padding: 10px 0;
    }

    ${Wrapper} {
        ${mixins.flexBetween}
        background-color: var(--primary-color-text);
    }
`;

export const HeaderLogo = styled.div`
    ${mixins.inlineBlock};

    a {
        display: block;
        padding: var(--space-xxl) var(--space-xxl) var(--space-xxl) 0;
        color: var(--primary-color);
        text-decoration: none;
        font-size: var(--space-xl);
        font-weight: 700;
        letter-spacing: 0;
    }
`;

export const HeaderButtonsMobile = styled.div`
    ${media.laptop} {
        display: none;
    }

    button {
        margin-left: -var(--space-xxl);
        padding: var(--space-xxl) var(--space-xxl) var(--space-xxl) 10px;
        border: none;
        background-color: var(--primary-color-text);
        outline-color: var(--primary-color);
        cursor: pointer;

        svg {
            ${mixins.inlineBlock}
            height: var(--space-xxl);
            width: var(--space-xxl);

            path {
                fill: var(--primary-color);
            }
        }
    }
`;

export const HeaderNav = styled.nav`
    ${media.laptopMax} {
        position: fixed;
        top: 69px;
        left: -100%;
        width: 80%;
        background-color: var(--primary-color-text);
        transition: left 0.5s ease;
    }

    ${({ isNavVisible }: IIsNavVisible) => {
        return (
            isNavVisible &&
            css`
                ${media.laptopMax} {
                    ${mixins.flexColumn};
                    left: 0;
                    border-top: 1px solid var(--divider-color);
                }
            `
        );
    }};

    ul {
        ${media.laptop} {
            ${mixins.flex}
            gap: 0;
        }

        li {
            border-bottom: 1px solid var(--divider-color);

            ${media.laptop} {
                border-bottom: none;
            }

            a {
                display: block;
                padding: 30px var(--space-lg);
                font-size: var(--space-sm);
                color: var(--primary-text-color);

                ${media.laptop} {
                    padding: 28px var(--space-xl);
                }

                &:hover {
                    background-color: var(--secondary-text-color-light);
                    color: var(--primary-text-color);
                }

                &.active {
                    color: var(--primary-color);
                }

                &.sign-in {
                    font-weight: 700;
                }
            }
        }
    }
`;
