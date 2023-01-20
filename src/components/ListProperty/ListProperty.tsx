import { Link } from 'react-router-dom';
import { Text, List, ListItem, Wrapper } from '../../styles/elements';
import * as Styles from './ListProperty.styles';

export const ListProperty = () => {
    return (
        <Styles.ListPropertyContainer>
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
        </Styles.ListPropertyContainer>
    );
};
