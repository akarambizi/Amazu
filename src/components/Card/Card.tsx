import { ICardProps } from './Card.types';
import { Text } from '../../styles/elements';
import { CardWrapper, CardImageLink, CardContent, CardLink, CardIcons } from './Card.styles';
import { ReactComponent as IconAreaSvg } from '../../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../../assets/images/icon-bed.svg';

export const Card = ({ data }: ICardProps) => {
    const {
        location: { fullAdress },
    } = data;
    return (
        <CardWrapper>
            <CardImageLink href="/typography">
                <img src={data.images[0]} alt={data.title} />
            </CardImageLink>
            <div>
                <CardContent>
                    <CardLink href="/">
                        <Text bold>{data.title}</Text>
                    </CardLink>
                    <Text>{fullAdress}</Text>
                    <Text bold secondary>{`$${data.price}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text aria-label="Bedrooms" title="Bedrooms">
                        <IconBedSvg />
                        <span>{data.bedRooms}</span>
                    </Text>
                    <Text aria-label="Bathrooms" title="Bathrooms">
                        <IconBathRoomSvg />
                        <span>{data.bathRooms}</span>
                    </Text>
                    <Text aria-label="Area" title="Area">
                        <IconAreaSvg />
                        <span>{`${data.area} ft`}</span>
                        <sup>2</sup>
                    </Text>
                </CardIcons>
            </div>
        </CardWrapper>
    );
};
