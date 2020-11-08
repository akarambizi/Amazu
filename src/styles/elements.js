import styled from 'styled-components';
import { media } from '.';
import mixins from './mixins';

export const Wrapper = styled.div`
    padding: 0 20px;

    ${media.laptop} {
        margin: 0 auto;
        max-width: 1240px;
        padding: 0;
    }
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    align-items: center;
    gap: 0 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const titles = {
    h2: 'font-size: 40px;',
    h3: 'font-size: 30px;',
    h4: 'font-size: 24px;',
    h5: 'font-size: 20px;',
    h6: 'font-size: 18px;',
    p: 'font-size: 22px;',
};

export const Title = styled.h1`
    ${(props) => (props.as in titles ? titles[props.as] : 'font-size: 50px;')};
    font-family: var(--font-tertiary);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 30px;
    margin-bottom: ${(props) => props.marginBottom || '10px'};
`;

export const Text = styled.p`
    color: ${(props) => (props.secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    display: ${(props) => props.display};
    font-family: var(--font-tertiary);
    font-size: ${(props) => (props.bold ? 'var(--font-size-xl)' : 'var(--font-size-md)')};
    font-weight: ${(props) => props.bold && '700'};
    line-height: 24px;
    margin-bottom: 10px;
    width: ${(props) => props.width};
`;

export const Anchor = styled.a`
    display: block;
    text-transform: capitalize;
`;

export const Button = styled.button`
    background: ${(props) => (props.secondary ? 'var(--primary-color-text)' : 'var(--primary-color)')};
    border-radius: 5px;
    border: ${(props) => (props.secondary ? '1px solid var(--divider-color)' : '1px solid var(--primary-color)')};
    box-shadow: ${(props) => (props.shadow ? '0px 10px 24px rgba(0, 0, 0, 0.19)' : null)};
    color: ${(props) => (props.secondary ? 'var(--primary-text-color)' : 'var(--primary-color-text)')};
    cursor: pointer;
    display: ${(props) => (props.min ? 'inline-block' : 'block')};
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: 16px;
    min-width: 142px;
    padding: 14px 20px;
    text-transform: capitalize;
    transition: 0.3s;
    width: ${(props) => props.width};

    &:hover {
        background: var(--primary-color-light);
        border: 1px solid var(--primary-color-light);
        color: var(--primary-text-color);
    }
`;

export const List = styled.ul`
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    font-family: var(----font-primary);
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;

    &::before {
        ${mixins.inlineBlock}
        background-color: var(--primary-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        margin-right: 7px;
        width: 6px;
    }
`;
