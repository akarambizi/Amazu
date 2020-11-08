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
};

export default mixins;
