import React from 'react';
import styled from 'styled-components';
import { mixins, media } from '../styles';
import { Title, Wrapper, Form } from '../styles/elements';

const HeroContainer = styled.section`
    ${mixins.flexCenter}
    background-blend-mode: multiply;
    background-color: var(--divider-color);
    background-image: url('https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe3391048aa6a5e7e0675015330416e8&auto=format&fit=crop&w=2089&q=80');
    background-position: center;
    background-size: cover;
    color: var(--primary-color-text);
    height: 500px;

    ${Form} {
        ${media.tablet} {
            ${mixins.flex}

            input {
                margin-bottom: 0;
            }
        }

        button {
            width: 100%;

            ${media.tablet} {
                width: auto;
            }
        }
    }
`;
function Hero() {
    return (
        <HeroContainer>
            <Wrapper>
                <Title marginBottom="var(--space-xl)">Discover Your Next Rental</Title>
                <Form>
                    <input type="text" name="search" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
                    <button type="submit">search</button>
                </Form>
            </Wrapper>
        </HeroContainer>
    );
}

export default Hero;
