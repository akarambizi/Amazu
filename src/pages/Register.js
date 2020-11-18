import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title, Text} from '../styles/elements';
import { mixins } from '../styles';

const RegisterMain = styled.section`
    ${mixins.flexBetween}
    /* background-color: red; */
    height: 100vh;
    form {
        width: 40%;
        padding: 0 40px;
    }

    div {
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
    }
`;

function Register() {
    return (
        <RegisterMain>
            <div>
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
            </div>
            <form action="">
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="userName" placeholder="Username" />
                <label htmlFor="userName">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" />
                <button type="submit">Register</button>
                <label htmlFor="rememberMe">Remember me</label>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <Link to="/">Forgot Password?</Link>
                <Text>
                    Don’t have an account?
                    <Link to="/">Sign up ?</Link>
                </Text>
            </form>
        </RegisterMain>
    );
}

export default Register;
