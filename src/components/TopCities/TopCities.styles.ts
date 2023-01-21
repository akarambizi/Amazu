import styled from 'styled-components';
import { mixins } from '../../styles';
import { Link } from 'react-router-dom';

export const TopCitiesWrapper = styled.section`
    padding: 80px 0 90px;

    h3 {
        margin-bottom: var(--space-xl);
    }
`;

export const TopCityLink = styled(Link)`
    ${mixins.flex};
    background-color: var(--primary-color-text);
    border-radius: 8px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    font-weight: 700;
    gap: var(--space-md);
    margin-bottom: 32px;
    padding: var(--space-xs);

    &:hover {
        background-color: var(--secondary-text-color-light);
    }

    img {
        border-radius: 5px;
        filter: brightness(90%);
        object-fit: cover;
        margin-right: 10px;
    }
`;
