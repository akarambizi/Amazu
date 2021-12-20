import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Wrapper, Text } from '../styles/elements';

const FooterMain = styled.footer`
    padding: 40px 0 30px;
    background-color: var(--secondary-text-color-light);
`;

function Footer({ location }) {
    const isRegisterPage = ['/signup', '/signin'].includes(location.pathname);
    const yearNow = new Date().getFullYear();

    return isRegisterPage ? null : (
        <FooterMain>
            <Wrapper>
                <Text heading sm>
                    &copy;Amazu - 
                    {' '}
                    <span>{yearNow}</span>
                </Text>
            </Wrapper>
        </FooterMain>
    );
}

Footer.defaultProps = {
    location: {},
};

Footer.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

// used withRouter to get location.pathname
export default withRouter(Footer);
