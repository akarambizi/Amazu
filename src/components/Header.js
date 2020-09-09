import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakPoint } from '../styles/break-point';

const HeaderContainer = styled.header`
    background: red;
    border: 1px solid palevioletred;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
    @media ${breakPoint.tablet} {
        background: green;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <nav>
                <div className="logo">
                    <p>RentHouse</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/rent">Rent</Link>
                    </li>
                    <li>
                        <Link to="/buy">Buy</Link>
                    </li>
                </ul>
                <div className="register">
                    <button>Sign In</button>
                </div>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
