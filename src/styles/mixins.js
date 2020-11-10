import { css, keyframes } from 'styled-components';

const loadingAnimation = keyframes`
    0% {
        transform: translateX(0);
    }

    50%,
    100% {
        transform: translateX(460px);
    }
`;

const mixins = {
    flex: css`
        display: flex;
        align-items: center;
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
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        overflow: hidden;
    `,

    positionAbsolute: css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
    `,

    loading: css`
        animation: ${loadingAnimation} 2s infinite linear;
        background: linear-gradient(90deg, var(--secondary-text-color-light) 0px, var(--divider-color) 40px, var(--secondary-text-color-light) 80px);
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.1;
        position: absolute;
        top: 0;
        width: 40px;
    `,

    button: css`
        background: ${({ secondary }) => (secondary ? 'var(--primary-color-text)' : 'var(--primary-color)')};
        border-radius: 5px;
        border: ${({ secondary }) => (secondary ? '1px solid var(--divider-color)' : '1px solid var(--primary-color)')};
        box-shadow: ${({ shadow }) => (shadow ? '0px 10px 24px rgba(0, 0, 0, 0.19)' : null)};
        color: ${({ secondary }) => (secondary ? 'var(--primary-text-color)' : 'var(--primary-color-text)')};
        cursor: pointer;
        display: ${({ min }) => (min ? 'inline-block' : 'block')};
        font-size: var(--font-size-sm);
        line-height: 16px;
        min-width: 142px;
        padding: 14px 20px;
        text-transform: capitalize;
        transition: 0.3s;
        width: ${({ width }) => width};

        &:hover {
            background: var(--primary-color-light);
            border: 1px solid var(--primary-color-light);
            color: var(--primary-text-color);
        }
    `,
};

export default mixins;
