import { FooterMain } from './Footer.styles';
import { IFooterProps } from './Footer.types';
// import { withRouter } from 'react-router-dom';
import { Text, Wrapper } from '../../styles/elements';

export const Footer = ({ location }: IFooterProps) => {
    const isRegisterPage = ['/signup', '/signin'].includes(location.pathname);
    const yearNow = new Date().getFullYear();

    return isRegisterPage ? null : (
        <FooterMain>
            <Wrapper>
                <Text heading sm>
                    &copy;Amazu - <span>{yearNow}</span>
                </Text>
            </Wrapper>
        </FooterMain>
    );
};

// used withRouter to get location.pathname
// export default withRouter(Footer);
