import { Card } from './Card';
import { Grid } from '../../styles/elements';
import { ICardProps } from './Card.types';

export const CardsList = ({ data }: ICardProps) => {
    return (
        <Grid transition spacing>
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
        </Grid>
    );
};
