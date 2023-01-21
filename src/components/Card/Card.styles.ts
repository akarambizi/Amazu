import styled from 'styled-components';
import { Anchor } from '../../styles/elements';
import { mixins } from '../../styles';

export const CardWrapper = styled.article`
    margin-bottom: var(--space-xxl);
    /* border: 1px solid var(--secondary-text-color-light); */
    /* padding: 4px 10px; */
    border-radius: 5px;
    /*  horizontal-card */
    /* ${mixins.flex}
    align-items: flex-start */
    transition: all 0.2s ease;
    box-shadow: 0 var(--space-md) 64px -16px rgb(46 55 77 / 10%);

    &:hover {
        box-shadow: 0 var(--space-md) 64px -16px rgb(46 55 77 / 24%);
    }
`;

export const CardImageLink = styled.a`
    display: block;
    position: relative;

    img {
        /* border-radius: 10px; */
        display: block;
        height: 100%;
        object-fit: cover;
        max-height: 180px;
        margin: 0 auto;
        position: relative;
        width: 100%;
    }
`;

export const CardContent = styled.div`
    border-bottom: 1px solid var(--secondary-text-color-light);
    padding: 5px 10px;
`;

export const CardLink = styled(Anchor)`
    &:hover,
    &:focus {
        p {
            color: var(--primary-color);
        }
    }

    p {
        transition: all 0.4s ease;
    }
`;

export const CardIcons = styled.div`
    ${mixins.flex}
    /* justify-content: flex-between; */
    gap: var(--space-xxl);
    padding: 10px;

    svg {
        height: var(--space-xl);
        margin-right: 5px;
        vertical-align: middle;

        path {
            fill: var(--secondary-text-color);
        }
    }

    span {
        ${mixins.inlineBlock}
        color: var(--secondary-text-color);
    }
`;

export const CardSkeletonWrapper = styled.article`
    margin-bottom: var(--space-xl);
`;

export const CardSkeletonImage = styled.div`
    background-color: var(--secondary-text-color-light);
    border-radius: 10px;
    height: 218px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    width: 100%;

    &::before {
        ${mixins.loading}
    }
`;

export const CardSkeletonText = styled.p`
    background-color: var(--secondary-text-color-light);
    height: var(--space-xl);
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    width: 80%;

    &::before {
        ${mixins.loading}
    }
`;
