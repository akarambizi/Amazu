import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Wrapper } from '../styles/elements';
import { colors, mixins, media } from '../styles';
import { ReactComponent as CloseSvg } from '../assets/images/icon-cross.svg';
import { ReactComponent as OpenSvg } from '../assets/images/icon-bars.svg';

const HeaderWrapper = styled.header`
    background-color: ${colors.divider};
    border-bottom: 1px solid var(--divider-color);
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    padding: 10px 0;
`;

const HeaderTop = styled.div`
    ${mixins.flexBetween};
`;

const HeaderLogo = styled.div`
    ${mixins.inlineBlock};

    a {
        color: var(--primary-color);
        font-family: var(--font-tertiary);
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0px;
        text-decoration: none;
    }
`;

const HeaderButtonWrapper = styled.div`
    ${mixins.inlineBlock};
    border-bottom: ${(props) => props.close && ' 1px solid var(--divider-color)'};
    box-shadow: ${(props) => props.close && '0 1px 6px 0 rgba(32, 33, 36, 0.28)'};
    margin-right: 6px;
    padding: ${(props) => props.close && '16px'};

    .open {
        padding: 10px 10px 10px 0;

        svg {
            height: 30px;
            width: 30px;
        }
    }
`;

const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline-color: var(--primary-color);

    svg {
        ${mixins.inlineBlock}
        height: 20px;
        width: 20px;

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
`;

const HeaderNav = styled.nav`
    ${mixins.flexColumn};
    ${mixins.positionFixed};
    background-color: var(--primary-color-text);
    border-right: 1px solid var(--divider-color);
    width: 100%;

    ul {
        li {
            border-bottom: 1px solid var(--divider-color);

            a {
                color: var(--primary-color);
                display: block;
                padding: 18px 10px;
                font-weight: 700;

                &:hover {
                    background-color: var(--secondary-text-color-light);
                }
            }
        }
    }
`;

const HeaderForm = styled.div`
    margin-top: ${(props) => (props.nav ? '20px' : 'none')};
    display: ${(props) => props.primary && 'none'};

    ${media.laptop} {
        display: ${(props) => props.primary && 'block'};
    }

    button {
        margin: 0 auto;
        width: ${(props) => props.nav && '100%'};
        display: ${(props) => (props.nav ? 'block' : 'inline-block')};

        &.register {
            margin: ${(props) => (props.nav ? '0 0 20px 0' : '0 16px 0 0')};
        }
    }
`;

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <HeaderWrapper>
            <Wrapper>
                <HeaderTop>
                    <div>
                        <HeaderButtonWrapper>
                            <HeaderButton className="open" type="button" aria-label="open header" onClick={() => setIsVisible(true)}>
                                <OpenSvg />
                            </HeaderButton>
                        </HeaderButtonWrapper>
                        <HeaderLogo>
                            <Link to="/">RentHouse</Link>
                        </HeaderLogo>
                    </div>
                    <HeaderForm primary>
                        <Button className="register" aria-label="register">
                            Register
                        </Button>
                        <Button aria-label="Log In">Log In</Button>
                    </HeaderForm>
                </HeaderTop>
                {isVisible && (
                    <HeaderNav>
                        <HeaderButtonWrapper close>
                            <HeaderButton type="button" aria-label="close header" onClick={() => setIsVisible(false)}>
                                <span>Close</span>
                                <CloseSvg />
                            </HeaderButton>
                        </HeaderButtonWrapper>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rent">Rent</Link>
                            </li>
                            <li>
                                <Link to="/buy">Buy</Link>
                            </li>
                        </ul>
                        <HeaderForm nav>
                            <Button className="register" aria-label="register">
                                Register
                            </Button>
                            <Button aria-label="Log In">Log In</Button>
                        </HeaderForm>
                    </HeaderNav>
                )}
            </Wrapper>
        </HeaderWrapper>
    );
}

export default Header;
