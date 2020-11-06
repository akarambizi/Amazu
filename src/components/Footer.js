import React from 'react';
import styled from 'styled-components';
import { Wrapper, Text } from '../styles/elements';

const FooterContainer = styled.footer`
    padding: 40px 0 30px;
    background-color: var(--divider-color);
`;

function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                <Text>&copy;RentHouse - 2020</Text>
            </Wrapper>
        </FooterContainer>
    );
}

export default Footer;
