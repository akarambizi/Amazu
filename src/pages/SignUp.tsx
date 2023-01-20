import { Link } from 'react-router-dom';
import { Title, Text, Form } from '../styles/elements';
import * as Styles from './pages.styles';

export const SignUp = () => {
    return (
        <Styles.RegisterMain>
            <Styles.RegisterForm>
                <Styles.Logo>
                    <Link to="/" aria-label="home">
                        Amazu
                    </Link>
                </Styles.Logo>
                <Text heading>Create an account</Text>
                <Form action="/">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                    <label htmlFor="userName">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" />
                    <button type="submit">SignUp</button>
                </Form>
                <div>
                    <Styles.RegisterFormBottom>
                        <div>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link to="/">Forgot Password?</Link>
                    </Styles.RegisterFormBottom>

                    <Text>
                        <span>Do you have an account? </span>
                        <Link to="/signin">Sign In</Link>
                    </Text>
                </div>
            </Styles.RegisterForm>
            <Styles.RegisterImage>
                <Title marginBottom="var(--space-xl)">Discover Your Next Rental</Title>
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
            </Styles.RegisterImage>
        </Styles.RegisterMain>
    );
};
