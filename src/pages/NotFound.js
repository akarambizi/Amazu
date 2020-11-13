import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text, Title, Wrapper } from '../styles/elements';
import { media } from '../styles';

const NotFoundMain = styled.section`
    text-align: center;
    padding: 40px 0 100px 0;

    h1 {
        color: var(--divider-color);
        font-size: 140px;

        ${media.laptop} {
            font-size: 300px;
        }
    }
    p {
        margin: 0 auto 40px;
        max-width: 400px;
    }

    a {
        color: var(--primary-color-dark);
    }
`;
function NotFound() {
    return (
        <NotFoundMain>
            <Wrapper>
                <Title>404</Title>
                <Text>This Page was not found. you may have mistyped the adress or the page may have moved</Text>
                <Link to="/" aria-label="home page">
                    Take me to the home page
                </Link>
            </Wrapper>
        </NotFoundMain>
    );
}

export default NotFound;
