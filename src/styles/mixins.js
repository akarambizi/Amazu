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

    grid: css`
        display: grid;
        align-items: center;
    `,
};

export default mixins;
