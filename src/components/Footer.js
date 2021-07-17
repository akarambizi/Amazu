import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper, Text } from '../styles/elements';

const FooterMain = styled.footer`
    padding: 40px 0 30px;
    background-color: var(--secondary-text-color-light);
`;

function Footer({ location }) {
    const isRegisterPage = ['/signup', '/signin'].includes(location.pathname);

    return isRegisterPage ? null : (
        <FooterMain>
            <Wrapper>
                <Text heading sm>
                    &copy;Amazu - 2020
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
export default withRouter(Footer);
