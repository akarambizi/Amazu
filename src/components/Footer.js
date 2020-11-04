import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/elements';
import { ReactComponent as IconApple } from '../assets/images/icon-apple.svg';
import { ReactComponent as IconGooglePlay } from '../assets/images/icon-google-play.svg';

const FooterContainer = styled.footer`
    svg {
        height: 30px;
        display: inline-block;
        border: 1px solid black;
        width: 108px;
        border-radius: 10px;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                <p>footer</p>
                <nav>
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
                </nav>
                <div>
                    <IconApple />
                    <IconGooglePlay />
                </div>
            </Wrapper>
        </FooterContainer>
    );
}

export default Footer;
