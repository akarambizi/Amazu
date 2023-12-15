import { Link } from 'react-router-dom';
import { Text, Title, Wrapper } from '../styles/elements';
import * as Styles from './pages.styles';

export const NotFound = () => {
    return (
        <Styles.NotFoundMain>
            <Wrapper>
                <Title>404</Title>
                <Text>This Page was not found. you may have mistyped the adress or the page may have moved</Text>
                <Link to="/" aria-label="home page">
                    Take me to the home page
                </Link>
            </Wrapper>
        </Styles.NotFoundMain>
    );
};

export default NotFound;
