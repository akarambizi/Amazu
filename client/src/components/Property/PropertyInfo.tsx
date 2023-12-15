import { ReactComponent as IconAreaSvg } from '../../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../../assets/images/icon-bed.svg';
import * as Styles from './Property.styles';

export const PropertyInfo = () => {
    return (
        <Styles.PropertyInfoContainer>
            <Styles.PropertyInfoSection max>
                <div className="price">
                    <p>$400,0000</p>
                </div>
                <div className="address">
                    <p>567 Marconi Dr.Pasadena, MD 21122</p>
                </div>
                <div>
                    <p>Share</p>
                </div>
            </Styles.PropertyInfoSection>
            <Styles.PropertyInfoSection border>
                <div>
                    <p>Bedrooms</p>
                    <span>4</span>
                    <IconBedSvg />
                </div>
                <div>
                    <p>Bathrooms</p>
                    <span>2</span>
                    <IconBathRoomSvg />
                </div>
                <div>
                    <p>Area</p>
                    <span>4 </span>
                    <IconAreaSvg />
                </div>
            </Styles.PropertyInfoSection>
            <Styles.PropertyInfoSection>
                <div>
                    <p>Built</p>
                    <span>2017</span>
                </div>
                <div>
                    <p>Parking</p>
                    <span>1 Indoor</span>
                </div>
                <div>
                    <p>Area Safety</p>
                    <span>4 </span>
                </div>
            </Styles.PropertyInfoSection>
            <Styles.PropertyInfoSection>
                <h4>Description</h4>
                <p className="description">
                    From the outside this house looks warm and cozy. It has been built with spruce wood and has sandstone decorations. Small, rectangular windows let in plenty of light and have been added to the house in a mostly asymmetric way. The house is equipped with an old-fashioned kitchen
                    and two bathrooms, it also has a small living room, three bedrooms, a grand dining area and a large storage room. The building is square shaped. The house is partially surrounded by glass overhanging panels on two sides. The second floor is bigger than the first, which creates a
                    stylish overhang around half the house. This floor has a very different style than the floor below.
                </p>
            </Styles.PropertyInfoSection>
        </Styles.PropertyInfoContainer>
    );
};
