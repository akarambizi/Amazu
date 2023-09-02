import React, { useMemo, useState } from 'react';
import { CardsList, CardsListLoading } from '../';
import { usePropertiesData } from '../../hooks/useQueryHooks';
import { Tab, Tabs, Text, Wrapper } from '../../styles/elements';

export const HomeCards = () => {
    const { isLoading, data } = usePropertiesData('');
    const propertiesData = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);

    const [activeTab, setActiveTab] = useState('Rent');
    const handleTab = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.target as HTMLElement;
        setActiveTab(button.textContent || '');
    };

    return (
        <section>
            <Text heading fullWidth centered marginBottom="32px">
                Featured Properties
            </Text>
            <Tabs centered>
                <Tab active={activeTab === 'Rent'} onClick={handleTab}>
                    Rent
                </Tab>
                <Tab active={activeTab === 'Buy'} onClick={handleTab}>
                    Buy
                </Tab>
                <Tab active={activeTab === 'House'} onClick={handleTab}>
                    House
                </Tab>
                <Tab active={activeTab === 'Appartment'} onClick={handleTab}>
                    Appartment
                </Tab>
            </Tabs>
            <Wrapper>
                {activeTab === 'Rent' && (isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[1]} />)}
                {activeTab === 'Buy' && (isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[1]} />)}
                {activeTab === 'House' && (isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[1]} />)}
                {activeTab === 'Appartment' && (isLoading ? <CardsListLoading /> : <CardsList data={propertiesData[1]} />)}
            </Wrapper>
        </section>
    );
};
