import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles';
import { Button } from './elements';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.divider};

    nav {
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
        }
    }
`;

function Header() {
    return (
        <HeaderContainer className="hello">
            <div className="logo">
                <p>RentHouse</p>
            </div>
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
    );
}

export default Header;
