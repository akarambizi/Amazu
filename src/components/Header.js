import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Button, Wrapper } from '../styles/elements';
import { mixins, media } from '../styles';
import { ReactComponent as CloseSvg } from '../assets/images/icon-cross.svg';
import { ReactComponent as OpenSvg } from '../assets/images/icon-bars.svg';

const HeaderMain = styled.header`
    background-color: var(--primary-color-text);
    border-bottom: 1px solid var(--divider-color);
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);

    ${media.laptopMax} {
        background-color: rgba(0, 0, 0, 0.6);
        /* TODO: fix hero moving up when the nav is visible */
        ${({ isNavVisible }) => isNavVisible && mixins.positionFixed}
        z-index: 300;
    }
`;

const HeaderWrapper = styled(Wrapper)`
    ${mixins.flexBetween}
    background-color: var(--primary-color-text);
    padding-top: 4px;
    padding-bottom: 4px;
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
        background-color: rgba(255, 255, 255);
        border: none;
        cursor: pointer;
        outline-color: var(--primary-color);
        padding: 12px 12px 12px 10px;
        margin-left: -12px;

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
    width: 80%;
    left: -100%;
    top: 56px;
    background-color: var(--primary-color-text);
    transition: left 1s ease;

    ${({ isNavVisible }) => {
        return (
            isNavVisible &&
            `
            ${media.laptopMax} {
                ${mixins.flexColumn};
                left: 0;
                border-top: 1px solid var(--divider-color);
            }
            `
        );
    }};

    ${media.laptop} {
        ${mixins.flex}
        position: static;
        width: auto;
        height: auto;
    }

    ul {
        li {
            border-bottom: 1px solid var(--divider-color);

            ${media.laptop} {
                ${mixins.inlineBlock}
                border-bottom: none;
                margin-right: 20px;
            }

            a {
                color: var(--primary-text-color);
                display: block;
                font-size: 16px;
                padding: 30px 18px;

                ${media.laptop} {
                    padding: 12px 18px;
                }

                &.active {
                    color: var(--primary-color);
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
        padding: 18px 20px;

        ${media.laptop} {
            ${mixins.inlineBlock}
            width: auto;
            padding: 14px 20px;
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

function Header({ location }) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const isRegisterPage = ['/register', '/login'].includes(location.pathname);

    return isRegisterPage ? null : (
        <HeaderMain isNavVisible={isNavVisible}>
            <HeaderWrapper>
                <HeaderLogo>
                    <Link to="/" aria-label="home">
                        RentHouse
                    </Link>
                </HeaderLogo>

                <HeaderButtons>
                    {isNavVisible ? (
                        <button type="button" aria-label="close header" onClick={() => setIsNavVisible(false)}>
                            <span>Close</span>
                            <CloseSvg />
                        </button>
                    ) : (
                        <button type="button" aria-label="open header" onClick={() => setIsNavVisible(true)}>
                            <OpenSvg />
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
Header.defaultProps = {
    location: {},
};

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

export default withRouter(Header);
