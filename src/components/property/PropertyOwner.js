import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';

const PropertyOwnerContainer = styled.section`
    text-align: center;
    border: 1px solid var(--divider-color);
    min-width: 250px;
`;
const PropertyOwnerTop = styled.div`
    padding: 18px 15px 12px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: 12px;
    }

    a {
        background-color: var(--primary-color-light);
        display: block;
        padding: 12px 0;
        color: var(--primary-text-color);
        text-decoration: none;
    }
    .rating,
    .properties {
        color: var(--secondary-text-color);
    }
`;

const PropertyOwnerbottom = styled.div`
    background-color: var(--divider-color);
    padding: 15px;
`;

function PropertyOwner() {
    return (
        <PropertyOwnerContainer>
            <PropertyOwnerTop>
                <img src="https://images.unsplash.com/photo-1565103446317-476a2b789651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=354&q=80" alt="owner" />
                <h3>Adam Magnuss</h3>
                <p className="rating">4.9/5</p>
                <a href="tel:544-544-544">544 544 544</a>
                <p className="properties">2 properties</p>
            </PropertyOwnerTop>
            <PropertyOwnerbottom>
                <Button width="100%">contact Agent</Button>
            </PropertyOwnerbottom>
        </PropertyOwnerContainer>
    );
}

export default PropertyOwner;
