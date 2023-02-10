import { Grid } from '../../styles/elements';
import { CardSkeleton } from './CardSkeleton';

export const CardsListLoading = () => {
    return (
        <Grid transition="true" spacing="true">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </Grid>
    );
};
