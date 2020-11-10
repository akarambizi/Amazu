import React from 'react';
import styled from 'styled-components';
import { Text, Button, List, ListItem, Wrapper } from '../styles/elements';

const ListPropertyContainer = styled.section`
    margin-bottom: 40px;
    background-color: var(--secondary-text-color-light);
    padding: 40px 40px 80px;
`;

function ListProperty() {
    return (
        <ListPropertyContainer>
            <Wrapper>
                <Text heading>List your property on RentHouse to connect to qualified tenants across the largest rental network.</Text>
                <Text heading>Benefits include:</Text>
                <List>
                    <ListItem>Accept rental applications</ListItem>
                    <ListItem>Collect rent payments</ListItem>
                    <ListItem>To get started, you&apos;ll be asked to sign in or register for a RentHouse account.</ListItem>
                </List>
                <Button aria-label="Sign In">Log In / Register</Button>
            </Wrapper>
        </ListPropertyContainer>
    );
}

export default ListProperty;
