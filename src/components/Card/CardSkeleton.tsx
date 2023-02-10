import { CardSkeletonImage, CardSkeletonText, CardSkeletonWrapper } from './Card.styles';

export const CardSkeleton = () => {
    return (
        <CardSkeletonWrapper>
            <CardSkeletonImage />
            <CardSkeletonText />
            <CardSkeletonText />
            <CardSkeletonText />
        </CardSkeletonWrapper>
    );
};
