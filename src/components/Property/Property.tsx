import { PropertyImages, PropertyOwner, PropertyInfo, Comment } from '../index';
import { Wrapper } from '../../styles/elements';
import * as Styles from './Property.styles';

const Property = () => {
    return (
        <Wrapper>
            <Styles.PropertyMain>
                <section>
                    <PropertyImages />
                    <PropertyInfo />
                </section>
                <PropertyOwner />
            </Styles.PropertyMain>
            <Comment />
        </Wrapper>
    );
};

export default Property;
