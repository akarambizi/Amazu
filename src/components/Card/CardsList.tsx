import { Grid } from '../../styles/elements';
import { Card } from './Card';
import { ICardProps } from './Card.types';

export const CardsList = ({ data }: ICardProps) => {
    return (
        <Grid transition="true" spacing="true">
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
        </Grid>
    );
};
