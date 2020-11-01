import React from 'react';
import styled from 'styled-components';
import { Button } from './elements';

const ListPropertyContainer = styled.section`
    width: 80%;
    margin: 5% auto 8% auto;

    h2 {
        font-size: 20px;
        line-height: 30px;
    }

    h3 {
        font-size: 16px;
    }

    ul {
        list-style: none;
        margin-bottom: 20px;

        li {
            line-height: 40px;
            margin-left: 20px;
        }
    }
`;

function ListProperty() {
    return (
        <ListPropertyContainer>
            <h1>List your property on Heza Hub to connect to qualified tenants across the largest rental network.</h1>
            <h3>Benefits include:</h3>
            <ul>
                <li>Accept rental applications</li>
                <li>Collect rent payments</li>
                <li>To get started, you`&apos;`ll be asked to sign in or register for a Heza Hub account.</li>
            </ul>
            <Button aria-label="Sign In">Log In / Register</Button>
        </ListPropertyContainer>
    );
}

export default ListProperty;
