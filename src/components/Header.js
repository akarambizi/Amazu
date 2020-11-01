import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles';
import { Button, Container } from '../styles/elements';
import { ReactComponent as OpenSvg } from '../assets/images/icon-bars.svg';
import { ReactComponent as CloseSvg } from '../assets/images/icon-cross.svg';

const HeaderContainer = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    background-color: ${colors.divider};

    /* nav {
        display: flex;
        align-items: center;

        ul {
            padding: 0;
            list-style: none;
            text-align: right;

            li {
                display: inline-block;
                padding: 10px 20px;
            }
        }

        p {
            margin: 0;
        } */
    }
`;

const HeaderButtons = styled.div`
    svg {
        height: 30px;
        width: 30px;
    }
`;

function Header() {
    return (
        <header>
            <Container>
                <HeaderContainer className="hello">
                    <div className="logo">
                        <p>RentHouse</p>
                    </div>
                    <HeaderButtons>
                        <button type="button" aria-label="open header">
                            <OpenSvg />
                        </button>
                        <button type="button" aria-label="close header">
                            <CloseSvg />
                        </button>
                    </HeaderButtons>
                    <nav>
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
                        <div className="register">
                            <Button>Register</Button>
                            <Button>Log In</Button>
                        </div>
                    </nav>
                </HeaderContainer>
            </Container>
        </header>
    );
}

export default Header;
