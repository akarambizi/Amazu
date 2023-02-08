import React, { useState } from 'react';
import { CardsList } from '../Card/CardsList';
import { Wrapper, Tab, Tabs, Text } from '../../styles/elements';
import { useQuery } from 'react-query';

export const HomeCards = () => {
    const { isLoading, data } = useQuery('propertiesData', () => fetch('http://localhost:4200/properties').then((res) => res.json()));
    const [activeTab, setActiveTab] = useState('Rent');
    const handleTab = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.target as HTMLElement;
        setActiveTab(button.textContent || '');
    };

    if (isLoading) return <p>Loading...</p>;

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
                {activeTab === 'Rent' && <CardsList data={data[0]} />}
                {activeTab === 'Buy' && <CardsList data={data[1]} />}
                {activeTab === 'House' && <CardsList data={data[2]} />}
                {activeTab === 'Appartment' && <CardsList data={data[3]} />}
            </Wrapper>
        </section>
    );
};
