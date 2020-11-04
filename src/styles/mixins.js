import { css } from 'styled-components';

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
};

export default mixins;
