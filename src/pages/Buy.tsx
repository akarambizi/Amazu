import { useMemo } from 'react';
import { usePropertiesData } from '../api/queries';
import { CardsList, CardsListLoading } from '../components';
import { Wrapper } from '../styles/elements';

export const Buy = () => {
    const { isLoading, data } = usePropertiesData('');
    const propertiesData = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);
    return (
        <section>
            <Wrapper>{isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[0]} />}</Wrapper>
        </section>
    );
};
