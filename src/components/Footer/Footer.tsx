import { FooterMain } from './Footer.styles';
import { Text, Wrapper } from '../../styles/elements';

export const Footer = () => {
    const yearNow = new Date().getFullYear();

    return (
        <FooterMain>
            <Wrapper>
                <Text data-testid="footer-content" heading sm>
                    &copy;Amazu - <span>{yearNow}</span>
                </Text>
            </Wrapper>
        </FooterMain>
    );
};
