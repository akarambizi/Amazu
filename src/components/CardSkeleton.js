import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';

const CardSkeletonWrapper = styled.article`
    margin-bottom: 20px;
`;

const CardSkeletonImage = styled.div`
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

const CardSkeletonText = styled.p`
    background-color: var(--secondary-text-color-light);
    height: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    width: 80%;

    &::before {
        ${mixins.loading}
    }
`;

function CardSkeleton() {
    return (
        <CardSkeletonWrapper>
            <CardSkeletonImage />
            <CardSkeletonText />
            <CardSkeletonText />
            <CardSkeletonText />
        </CardSkeletonWrapper>
    );
}

export default CardSkeleton;
