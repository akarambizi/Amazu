import { css, keyframes } from 'styled-components';
import { IButtonStylesProps } from './styles.types';

const loadingAnimation = keyframes`
    0% {
        transform: translateX(0);
    }

    50%,
    100% {
        transform: translateX(460px);
    }
`;

const opacityAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const mixins = {
    flex: css`
        display: flex;
        align-items: center;
        gap: 10px;
    `,

    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    flexColumn: css`
        display: flex;
        flex-direction: column;
    `,

    grid: css`
        display: grid;
        align-items: center;
    `,

    inlineBlock: css`
        display: inline-block;
        vertical-align: middle;
    `,

    positionFixed: css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 100;
    `,

    positionAbsolute: css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
    `,

    loading: css`
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 40px;
        animation: ${loadingAnimation} 2s infinite linear;
        background: linear-gradient(90deg, var(--secondary-text-color-light) 0px, var(--divider-color) 40px, var(--secondary-text-color-light) 80px);
        opacity: 0.1;
    `,

    opacityAnimation: css`
        animation: ${opacityAnimation} 0.4s ease;
    `,

    button: css<IButtonStylesProps>`
        display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
        border: ${({ secondary }) => (secondary ? '1px solid var(--divider-color)' : '1px solid var(--primary-color)')};
        padding: var(--space-sm) var(--space-xl);
        width: ${({ width }) => width};
        min-width: 142px;
        border-radius: 5px;
        color: ${({ secondary }) => (secondary ? 'var(--primary-text-color)' : 'var(--primary-color-text)')};
        background: ${({ secondary }) => (secondary ? 'var(--primary-color-text)' : 'var(--primary-color)')};
        box-shadow: ${({ shadow }) => (shadow ? '0px 10px var(--space-xxl) rgba(0, 0, 0, 0.19)' : null)};
        cursor: pointer;
        font-size: var(--space-sm);
        line-height: var(--space-md);
        text-transform: capitalize;
        text-align: center;
        transition: 0.3s;

        &:hover {
            background: var(--primary-color-light);
            border: 1px solid var(--primary-color-light);
            color: var(--primary-text-color);
        }
    `,

    boxShadow: css`
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `,
};

export default mixins;
