import { Wrapper } from '../../styles/elements';
import { Comment, PropertyImages, PropertyInfo, PropertyOwner } from '../index';
import * as Styles from './Property.styles';

export const Property = () => {
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
