import React, { useState } from 'react';
import { CardsList } from '../Card/CardsList';
import data from '../../assets/json/properties.json';
import { Wrapper, Tab, Tabs, Text } from '../../styles/elements';

export const HomeCards = () => {
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
                {activeTab === 'Rent' && <CardsList data={data[0]} />}
                {activeTab === 'Buy' && <CardsList data={data[1]} />}
                {activeTab === 'House' && <CardsList data={data[2]} />}
                {activeTab === 'Appartment' && <CardsList data={data[3]} />}
            </Wrapper>
        </section>
    );
};
