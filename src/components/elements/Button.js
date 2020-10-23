import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    background: ${(props) => (props.secondary ? 'var(--primary-color-text)' : 'var(--primary-color)')};
    box-shadow: ${(props) => (props.shadow ? '0px 10px 24px rgba(0, 0, 0, 0.19)' : null)};
    border-radius: 5px;
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-size-sm);
    line-height: 16px;
    color: ${(props) => (props.secondary ? 'var(--primary-text-color)' : 'var(--primary-color-text)')};
    border: ${(props) => (props.secondary ? '1px solid var(--divider-color)' : '1px solid var(--primary-color)')};
    padding: 10px 20px;
    min-width: 142px;
    width: ${(props) => props.width};
    text-transform: capitalize;
    transition: 0.3s;

    &:hover {
        background: var(--primary-color-light);
        color: var(--primary-text-color);
        border: 1px solid var(--primary-color-light);
    }
`;

export default Button;
