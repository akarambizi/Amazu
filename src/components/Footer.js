import React from 'react';
import styled from 'styled-components';
import { Wrapper, Text } from '../styles/elements';

const FooterMain = styled.footer`
    padding: 40px 0 30px;
    background-color: var(--secondary-text-color-light);
`;

function Footer() {
    return (
        <FooterMain>
            <Wrapper>
                <Text heading sm>&copy;RentHouse - 2020</Text>
            </Wrapper>
        </FooterMain>
    );
}

export default Footer;
