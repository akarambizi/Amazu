import styled from 'styled-components';
import mixins from './mixins';
import media from './media';
import arrowUrl from '../assets/images/icon-angle-down.svg';

export const Wrapper = styled.div`
    padding: 0 20px;

    ${media.laptop} {
        margin: 0 auto;
        /* padding: 0; */
        max-width: 1240px;
    }
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    align-items: center;
    gap: 0 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    /* horizontal-card */
    /* grid-template-columns: 1fr 1fr; */
    padding: ${({ spacing }) => spacing && '10px 0'};

    ${media.laptop} {
        padding: ${({ spacing }) => spacing && '40px 0'};
        ${({ transition }) => transition && mixins.opacityAnimation}
    }
`;

const titles = {
    h2: 'font-size: 40px;',
    h3: 'font-size: 30px;',
    h4: 'font-size: 24px;',
    h5: 'font-size: 20px;',
    h6: 'font-size: 18px;',
};

export const Title = styled.h1`
    ${({ as: tag }) => (tag in titles ? titles[tag] : 'font-size: 44px;')};
    margin-bottom: ${({ marginBottom }) => marginBottom || '10px'};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    font-family: var(--font-secondary);
    font-weight: 700;
    letter-spacing: 0;
    text-align: ${({ centered }) => centered && 'center'};
`;

export const Text = styled.p`
    display: ${({ display }) => display};
    margin-bottom: 5px;
    width: ${({ width }) => width};
    color: ${({ secondary }) => (secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    font-size: ${({ bold }) => (bold ? 'var(--font-size-md)' : 'var(--font-size-sm)')};
    font-weight: ${({ bold }) => bold && '700'};
    line-height: 24px;

    ${({ heading, fullWidth, centered, marginBottom, sm }) => {
        return (
            heading &&
            `
            margin-bottom: 18px;
            margin-bottom: ${marginBottom || '10px'};
            width: ${fullWidth ? '100%' : 'auto'};
            text-align: ${centered && 'center'};
            font-size: ${sm ? '14px' : '18px'};
            font-weight: 700;
            line-height: 34px;

            ${media.laptop} {
                font-size: ${sm ? '18px' : '24px'};
            }
            `
        );
    }};
`;

export const Anchor = styled.a`
    display: block;
    text-transform: capitalize;
`;

export const Button = styled.button`
    ${mixins.button}
`;

export const List = styled.ul`
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;

    &::before {
        ${mixins.inlineBlock}
        content: '';
        height: 6px;
        width: 6px;
        margin-right: 7px;
        border-radius: 50%;
        background-color: var(--primary-color);
    }
`;

export const Tabs = styled.div`
    ${mixins.flex}
    margin: 0 20px 32px;
    margin-bottom: ${({ marginBottom }) => marginBottom && '20px'};
    border-bottom: 1px solid #d8d8d8;
    /* width: 100%; */
    box-sizing: border-box;

    ${media.laptop} {
        margin: ${({ centered }) => centered && '0 auto'};
        max-width: 1240px;
    }
`;

export const Tab = styled.button`
    width: 100%;
    border: none;
    border-bottom: ${({ active }) => active && '2px solid #0d9b6e'};
    padding: ${({ active }) => (active ? '6px 10px' : '8px 10px')};
    color: #0f2524;
    background-color: transparent;
    font-size: 12px;
    font-weight: 800;
    line-height: 18px;
    cursor: pointer;
    outline: none;
    transition: border-bottom 0.2s ease;
    margin-bottom: -2px;

    ${media.laptop} {
        padding: ${({ active }) => (active ? '6px 18px' : '8px 18px')};
        font-size: 14px;
    }
`;

export const Form = styled.form`
    label {
        ${mixins.inlineBlock}
        font-size: 14px;
        margin-bottom: 12px;
        text-transform: capitalize;
    }

    input,
    select,
    textarea {
        border-radius: 8px;
        border: 1px solid var(--secondary-text-color);
        box-sizing: border-box;
        display: block;
        font-size: 16px;
        margin-bottom: 20px;
        outline: none;
        padding: 15px;
        text-align: left;
        width: 100%;
    }

    input[type='button'],
    button {
        ${mixins.button}
        text-align:center;
    }

    input[type='radio'],
    input[type='checkbox'] {
        ${mixins.inlineBlock}
        margin-right:20px;
        width: 20px;
    }

    input[type='text'] {
        &:focus {
            border: 1px solid var(--primary-color);
        }
    }

    select {
        appearance: none;
        background: url(${arrowUrl});
        background-position: calc(100% - 30px) 50%;
        background-repeat: no-repeat;
        background-size: 14px;
        padding: 12px 36px 12px 12px;
        width: 100%;
    }
`;
