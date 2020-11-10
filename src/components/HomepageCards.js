import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Wrapper, Grid, Tab, Tabs, Title } from '../styles/elements';
import data from '../assets/json/properties.json';
import { media, mixins } from '../styles';

const TabsWrapper = styled.div`
    ${mixins.flex}
    margin-bottom: 32px;
    align-items: flex-end;

    ${media.laptop} {
        align-items: center;
    }

    p {
        display: none;
        ${media.laptop} {
            display: block;
        }
    }
`;
function HomepageCards() {
    return (
        <Wrapper>
            <h2>card</h2>
            <TabsWrapper>
                <Tabs>
                    <Tab active>House</Tab>
                    <Tab>Appartment</Tab>
                </Tabs>
                <Title as="p" fullWidth centered marginBottom="0">
                    Featured Properties
                </Title>
                <Tabs>
                    <Tab>Rent</Tab>
                    <Tab>View All</Tab>
                </Tabs>
            </TabsWrapper>

            <Grid>
                <Card data={data[0]} />
                <Card data={data[0]} />
                <Card data={data[0]} />
                <Card data={data[0]} />
                <Card data={data[0]} />
                <Card data={data[0]} />
            </Grid>
        </Wrapper>
    );
}

export default HomepageCards;
