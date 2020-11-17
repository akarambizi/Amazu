import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title, Wrapper } from '../styles/elements';
import { mixins } from '../styles';

const RegisterMain = styled(Wrapper)`
    ${mixins.flexBetween}
    /* background-color: red; */
    height: 100vh;
    form {
        width: 100%;
    }
    ul {
        li {
            ${mixins.inlineBlock}
        }
    }
    div {
        color: white;
        height: 100%;
        width: 100%;
        background-image: url('https://images.unsplash.com/photo-1542687226-54a9a41eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: green;
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
                <input type="text" name="userName" id="userName" placeholder="username" />
                <label htmlFor="userName">Password</label>
                <input type="password" name="password" id="password" placeholder="password" autoComplete="on" />
                <button type="submit">Register</button>
                <label htmlFor="rememberMe">Remember me</label>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <Link to="/">Forgot Password?</Link>
            </form>
        </RegisterMain>
    );
}

export default Register;
