import { Link } from 'react-router-dom';
import { Form, Text, Title } from '../styles/elements';
import * as Styles from './pages.styles';

export const SignIn = () => {
    return (
        <Styles.LogInMain>
            <Styles.LogInForm>
                <Styles.Logo>
                    <Link to="/" aria-label="home">
                        Amazu
                    </Link>
                </Styles.Logo>
                <Text heading>Log in</Text>
                <Form action="/">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                    <label htmlFor="userName">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" />
                    <button type="submit">SignIn</button>
                </Form>
                <div>
                    <Styles.LogInFormBottom>
                        <div>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link to="/">Forgot Password?</Link>
                    </Styles.LogInFormBottom>
                    <Text>
                        <span>Don’t have an account? </span>
                        <Link to="/signup">Sign up</Link>
                    </Text>
                </div>
            </Styles.LogInForm>
            <Styles.LogInImage>
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
            </Styles.LogInImage>
        </Styles.LogInMain>
    );
};

export default SignIn;
