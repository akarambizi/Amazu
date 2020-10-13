import styled from 'styled-components';
import { media } from '../../styles';

const Container = styled.div`
    padding: 0 20px;

    @media ${media.desktop} {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default Container;
