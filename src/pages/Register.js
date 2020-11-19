import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title, Text } from '../styles/elements';
import { mixins } from '../styles';

const RegisterMain = styled.section`
    ${mixins.flexBetween}
    height:100vh;
    p {
        font-size: 14px;
    }
    a {
        color: var(--primary-color);
    }
`;

const RegisterForm = styled.div`
    width: 40%;
    padding: 0 40px;
    form {
        button {
            margin-bottom: 20px;
        }
    }
`;

const RegisterFormBottom = styled.div`
    ${mixins.flexBetween}
    margin-bottom:20px;

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

const Logo = styled.div`
    text-align: center;

    a {
        color: var(--primary-color);
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0;
        text-decoration: none;
        display: block;
        padding: 12px 12px 12px 0;
        text-align: center;
        line-height: 40px;
    }
`;

const RegisterImage = styled.div`
    ${mixins.flexColumn}
    justify-content:center;
    background-color: green;
    background-image: url('https://images.unsplash.com/photo-1542687226-54a9a41eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--primary-color-text);
    height: 100%;
    text-align: center;
    width: 60%;

    ul {
        li {
            ${mixins.inlineBlock}
            margin:0 24px;
            a {
                color: var(--primary-color-text);
                font-size: 18px;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;

function Register() {
    return (
        <RegisterMain>
            <RegisterImage>
                <Title marginBottom="20px">Discover Your Next Rental</Title>
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
            </RegisterImage>
            <RegisterForm>
                <Logo>
                    <Link to="/" aria-label="home">
                        RentHouse
                    </Link>
                </Logo>
                <form action="/">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                    <label htmlFor="userName">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" />
                    <button type="submit">Register</button>
                </form>
                <div>
                    <RegisterFormBottom>
                        <form action="">
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </form>
                        <Link to="/">Forgot Password?</Link>
                    </RegisterFormBottom>

                    <Text>
                        <span>Don’t have an account? </span>
                        <Link to="/">Sign up ?</Link>
                    </Text>
                </div>
            </RegisterForm>
        </RegisterMain>
    );
}

export default Register;
