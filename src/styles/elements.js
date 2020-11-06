import styled from 'styled-components';
import { media } from '.';

export const Wrapper = styled.div`
    padding: 0 20px;

    ${media.laptop} {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const Grid = styled.section`
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Text = styled.p`
    font-family: var(--font-primary);
    font-size: ${(props) => (props.bold ? 'var(--font-size-xl)' : 'var(--font-size-md)')};
    line-height: 20px;
    font-weight: ${(props) => props.bold && '700'};
    color: ${(props) => (props.secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    display: ${(props) => props.display};
    width: ${(props) => props.width};
    margin-bottom: 0 0 10px 0;
`;

export const Anchor = styled.a`
    text-transform: capitalize;
    text-decoration: none !important;
    display: block;
`;

export const Button = styled.button`
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
    padding: 14px 20px;
    min-width: 142px;
    width: ${(props) => props.width};
    text-transform: capitalize;
    transition: 0.3s;
    display: ${(props) => (props.min ? 'inline-block' : 'block')};

    &:hover {
        background: var(--primary-color-light);
        color: var(--primary-text-color);
        border: 1px solid var(--primary-color-light);
    }
`;
