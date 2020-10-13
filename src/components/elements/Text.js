import styled from 'styled-components';

const Text = styled.p`
    font-family: var(--font-tertiary);
    font-size: ${(props) => (props.bold ? 'var(--font-size-xl)' : 'var(--font-size-md)')};
    line-height: 20px;
    font-weight: ${(props) => props.bold && '700'};
    color: ${(props) => (props.secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    display: ${(props) => props.display};
    width: ${(props) => props.width};
    margin: 0 0 10px 0;
`;

export default Text;
