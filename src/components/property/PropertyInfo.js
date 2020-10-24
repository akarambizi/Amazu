import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconAreaSvg } from '../../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../../assets/images/icon-bed.svg';
import { mixins } from '../../styles';

const PropertyInfoContainer = styled.div`
    max-width: 885px;
`;

const PropertyInfoTop = styled.div`
    ${mixins.grid};
    ${(props) => (props.max ? mixins.flexBetween : mixins.grid)};
    grid-template-columns: repeat(3, 1fr);
    max-width: ${(props) => (props.max ? '100%' : '555px')};
    margin-left: auto;

    margin-bottom: 25px;

    p {
        font-family: var(--secondary-text-color);
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0px;
        margin-bottom: 10px;
    }

    span {
        font-family: var(--font-tertiary);
        font-size: var(--font-size-xl);
        line-height: 20px;
        font-weight: 700;
        color: var(--primary-text-color);
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }

    svg {
        height: 20px;
        display: inline-block;
        vertical-align: middle;
    }

    .description {
        grid-column: span 2;
    }
`;

function PropertyInfo() {
    return (
        <PropertyInfoContainer>
            <PropertyInfoTop max>
                <div>
                    <p>$4000000</p>
                </div>
                <div>
                    <p>567 Marconi Dr.Pasadena, MD 21122</p>
                </div>
                <div>
                    <p>Share</p>
                </div>
            </PropertyInfoTop>
            <PropertyInfoTop>
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
            </PropertyInfoTop>
            <PropertyInfoTop>
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
            </PropertyInfoTop>
            <PropertyInfoTop>
                <h4>Description</h4>
                <p className="description">
                    From the outside this house looks warm and cozy. It has been built with spruce wood and has sandstone decorations. Small, rectangular windows let in plenty of light and have been
                    added to the house in a mostly asymmetric way. The house is equipped with an old-fashioned kitchen and two bathrooms, it also has a small living room, three bedrooms, a grand
                    dining area and a large storage room. The building is square shaped. The house is partially surrounded by glass overhanging panels on two sides. The second floor is bigger than the
                    first, which creates a stylish overhang around half the house. This floor has a very different style than the floor below.
                </p>
            </PropertyInfoTop>
        </PropertyInfoContainer>
    );
}

export default PropertyInfo;
