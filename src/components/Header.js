import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { ReactComponent as CloseSvg } from '../assets/images/icon-cross.svg';
import { ReactComponent as OpenSvg } from '../assets/images/icon-bars.svg';
import { Wrapper } from '../styles/elements';
import { mixins, media } from '../styles';

const HeaderMain = styled.header`
    background-color: var(--primary-color-text);
    border-bottom: 1px solid var(--divider-color);

    ${media.laptopMax} {
        /* TODO: fix hero moving up when the nav is visible */
        ${({ isNavVisible }) => isNavVisible && mixins.positionFixed}
        z-index: 300;
        padding: 10px 0;
    }
`;

const HeaderWrapper = styled(Wrapper)`
    ${mixins.flexBetween}
    background-color: var(--primary-color-text);
`;

const HeaderLogo = styled.div`
    ${mixins.inlineBlock};

    a {
        display: block;
        padding: 12px 12px 12px 0;
        color: var(--primary-color);
        text-decoration: none;
        font-size: var(--font-size-xl);
        font-weight: 700;
        letter-spacing: 0;
    }
`;

const HeaderButtonsMobile = styled.div`
    ${media.laptop} {
        display: none;
    }

    button {
        margin-left: -12px;
        padding: 12px 12px 12px 10px;
        border: none;
        background-color: var(--primary-color-text);
        outline-color: var(--primary-color);
        cursor: pointer;

        svg {
            ${mixins.inlineBlock}
            height: 24px;
            width: 24px;

            path {
                fill: var(--primary-color);
            }
        }
    }
`;

const HeaderNav = styled.nav`
    ${media.laptopMax} {
        position: fixed;
        top: 69px;
        left: -100%;
        width: 80%;
        background-color: var(--primary-color-text);
        transition: left 0.5s ease;
    }

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
                padding: 30px 18px;
                font-size: var(--font-size-sm);
                color: var(--primary-text-color);

                ${media.laptop} {
                    padding: 28px 20px;
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

function Header({ location }) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const isRegisterPage = ['/signup', '/signin'].includes(location.pathname);

    return isRegisterPage ? null : (
        <HeaderMain isNavVisible={isNavVisible}>
            <HeaderWrapper>
                <HeaderLogo>
                    <Link to="/" aria-label="home">
                        Amazu
                    </Link>
                </HeaderLogo>

                {/* close and open header links on mobile */}
                <HeaderButtonsMobile>
                    <button type="button" aria-label={`${isNavVisible ? 'close' : 'open'} header`} onClick={() => setIsNavVisible(!isNavVisible)}>
                        {isNavVisible ? <CloseSvg /> : <OpenSvg />}
                    </button>
                </HeaderButtonsMobile>

                <HeaderNav isNavVisible={isNavVisible}>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active" onClick={() => setIsNavVisible(false)}>
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
                        <li>
                            <NavLink to="/signin" className="sign-in" aria-label="Sign In" onClick={() => setIsNavVisible(false)}>
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
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

// used withRouter to get location.pathname
export default withRouter(Header);
