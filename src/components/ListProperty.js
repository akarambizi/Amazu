import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mixins } from '../styles';
import { Text, List, ListItem, Wrapper } from '../styles/elements';

const ListPropertyContainer = styled.section`
    margin-bottom: 40px;
    background-color: var(--secondary-text-color-light);
    padding: 80px 0;

    a {
        ${mixins.button}
    }
`;

function ListProperty() {
    return (
        <ListPropertyContainer>
            <Wrapper>
                <Text heading>List your property on Amazu to connect to qualified tenants across the largest rental network.</Text>
                <Text heading sm>
                    Benefits include:
                </Text>
                <List>
                    <ListItem>Accept rental applications</ListItem>
                    <ListItem>Collect rent payments</ListItem>
                    <ListItem>To get started, you&apos;ll be asked to sign in or sign up for a Amazu account.</ListItem>
                </List>
                <Link to="/signup" aria-label="Sign In">
                    Sign Up
                </Link>
            </Wrapper>
        </ListPropertyContainer>
    );
}

export default ListProperty;
