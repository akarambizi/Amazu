import React from 'react';
import { Wrapper } from '../styles/elements';

function Register() {
    return (
        <div>
            <Wrapper>
                <form action="">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder="username" />
                    <label htmlFor="userName">Password</label>
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">Register</button>
                    <label htmlFor="rememberMe">Remember me</label>
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                </form>
                <a href="/">Forgot Password?</a>
            </Wrapper>
        </div>
    );
}

export default Register;
