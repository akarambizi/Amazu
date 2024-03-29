import styled from 'styled-components';
import { media, mixins } from '../../styles';
import { Form } from '../../styles/elements';

export const HeroContainer = styled.section`
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
