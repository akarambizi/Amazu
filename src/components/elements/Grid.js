import styled from 'styled-components';

const Grid = styled.section`
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export default Grid;
