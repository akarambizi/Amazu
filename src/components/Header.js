import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Button, Wrapper } from '../styles/elements';
import { mixins, media } from '../styles';
import { ReactComponent as CloseSvg } from '../assets/images/icon-cross.svg';
import { ReactComponent as OpenSvg } from '../assets/images/icon-bars.svg';

const HeaderMain = styled.header`
    background-color: var(--primary-color-text);
    border-bottom: 1px solid var(--divider-color);
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);

    ${media.laptopMax} {
        ${({ isNavVisible }) => isNavVisible && mixins.positionFixed};
    }
`;

const HeaderWrapper = styled(Wrapper)`
    ${mixins.flexBetween}
    box-sizing: border-box;
    height: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const HeaderLogo = styled.div`
    ${mixins.inlineBlock};

    a {
        color: var(--primary-color);
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0;
        text-decoration: none;
        display: block;
        padding: 12px 12px 12px 0;
    }
`;

const HeaderButtons = styled.div`
    ${media.laptop} {
        display: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline-color: var(--primary-color);
        padding: 12px 0 12px 10px;

        svg {
            ${mixins.inlineBlock}
            height: 24px;
            width: 24px;

            path {
                fill: var(--primary-color);
            }
        }

        span {
            ${mixins.inlineBlock}
            color: var(--primary-color);
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
`;

const HeaderNav = styled.nav`
    ${mixins.positionFixed};
    background-color: var(--primary-color-text);
    left: -100%;
    opacity: 0.95;
    top: 70px;
    transition: all 0.6s ease;

    ${media.laptop} {
        ${mixins.flex}
        opacity:1;
        position: static;
        width: auto;
    }

    ${({ isNavVisible }) => {
        return (
            isNavVisible &&
            `
            ${media.laptopMax} {
                ${mixins.flexColumn};
                background-color: var(--primary-color-text);
                border-top: 1px solid var(--divider-color);
                left: 0;
                width: 100%;
            }
            `
        );
    }};

    ul {
        li {
            border-bottom: 1px solid var(--divider-color);

            ${media.laptop} {
                ${mixins.inlineBlock}
                border-bottom: none;
                margin-right: 20px;
            }

            a {
                color: var(--primary-color);
                display: block;
                font-weight: 700;
                padding: 12px 18px;

                &:hover,
                &.active {
                    background-color: var(--secondary-text-color-light);
                }
            }
        }
    }
`;

const HeaderForm = styled.div`
    margin: 20px 20px 0;

    ${media.laptop} {
        margin: 0;
    }

    button {
        width: 100%;

        ${media.laptop} {
            ${mixins.inlineBlock}
            width: auto;
        }
    }

    .register {
        margin-right: 20px;
        margin-bottom: 20px;

        ${media.laptop} {
            margin-bottom: 0;
        }
    }
`;

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <HeaderMain isNavVisible={isNavVisible}>
            <HeaderWrapper>
                <HeaderLogo>
                    <Link to="/" aria-label="home">
                        RentHouse
                    </Link>
                </HeaderLogo>

                <HeaderButtons>
                    {!isNavVisible && (
                        <button type="button" aria-label="open header" onClick={() => setIsNavVisible(true)}>
                            <OpenSvg />
                        </button>
                    )}
                    {isNavVisible && (
                        <button type="button" aria-label="close header" onClick={() => setIsNavVisible(false)}>
                            <span>Close</span>
                            <CloseSvg />
                        </button>
                    )}
                </HeaderButtons>
                <HeaderNav isNavVisible={isNavVisible}>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active" onClick={() => setIsNavVisible(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rent" activeClassName="active" onClick={() => setIsNavVisible(false)}>
                                Rent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/buy" activeClassName="active" onClick={() => setIsNavVisible(false)}>
                                Buy
                            </NavLink>
                        </li>
                    </ul>
                    <HeaderForm isNavVisible={isNavVisible}>
                        <Button className="register" aria-label="register">
                            Register
                        </Button>
                        <Button aria-label="Log In">Log In</Button>
                    </HeaderForm>
                </HeaderNav>
            </HeaderWrapper>
        </HeaderMain>
    );
}

export default Header;
