import React from 'react';
import styled from 'styled-components';
import { Text, Button, List, ListItem } from '../styles/elements';

const ListPropertyContainer = styled.section`
    margin-bottom: 40px;
    background-color: var(--secondary-text-color-light);
    padding: 40px 40px 80px;

    p {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 22px;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

function ListProperty() {
    return (
        <ListPropertyContainer>
            <Text>List your property on RentHouse to connect to qualified tenants across the largest rental network.</Text>
            <h3>Benefits include:</h3>
            <List>
                <ListItem>Accept rental applications</ListItem>
                <ListItem>Collect rent payments</ListItem>
                <ListItem>To get started, you&apos;ll be asked to sign in or register for a RentHouse account.</ListItem>
            </List>
            <Button aria-label="Sign In">Log In / Register</Button>
        </ListPropertyContainer>
    );
}

export default ListProperty;
