import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
    color: var(--primary-color-text);
    background: url('https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe3391048aa6a5e7e0675015330416e8&auto=format&fit=crop&w=2089&q=80')
        center/cover rgba(33, 33, 33, 0.14);
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: var(--font-tertiary);
        font-size: 50px;
        line-height: 59px;
        text-shadow: 0px 0px 29px var(--primary-color);
    }
`;
function Hero() {
    return (
        <HeroContainer>
            <h1>Discover Your Next Rental</h1>
        </HeroContainer>
    );
}

export default Hero;
