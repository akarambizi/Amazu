import styled from 'styled-components';
import { mixins } from '../../styles';

export const ListPropertyContainer = styled.section`
    margin-bottom: 40px;
    background-color: var(--secondary-text-color-light);
    padding: 80px 0;

    a {
        ${mixins.button}
    }
`;
