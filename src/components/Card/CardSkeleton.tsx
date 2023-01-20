import { CardSkeletonWrapper, CardSkeletonImage, CardSkeletonText } from './Card.styles';

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
