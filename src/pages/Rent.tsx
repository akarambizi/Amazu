import { useMemo } from 'react';
import { CardsList, CardsListLoading } from '../components';
import { usePropertiesData } from '../hooks';
import { Wrapper } from '../styles/elements';

export const Rent = () => {
    const { isLoading, data } = usePropertiesData('');
    const propertiesData = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);
    return (
        <section>
            <Wrapper>{isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[1]} />}</Wrapper>
        </section>
    );
};
