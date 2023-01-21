import { Button } from '../../styles/elements';
import * as Styles from './Property.styles';

export const PropertyOwner = () => {
    return (
        <Styles.PropertyOwnerContainer>
            <Styles.PropertyOwnerTop>
                <img src="https://images.unsplash.com/photo-1565103446317-476a2b789651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=354&q=80" alt="owner" />
                <h3>Adam Magnuss</h3>
                <p className="rating">4.9/5</p>
                <a href="tel:544-544-544">544 544 544</a>
                <p className="properties">2 properties</p>
            </Styles.PropertyOwnerTop>
            <Styles.PropertyOwnerbottom>
                <Button width="100%">contact Agent</Button>
            </Styles.PropertyOwnerbottom>
        </Styles.PropertyOwnerContainer>
    );
};
