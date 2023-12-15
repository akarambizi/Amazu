import { ReactComponent as IconAreaSvg } from '../../assets/images/icon-area.svg';
import { ReactComponent as IconBathRoomSvg } from '../../assets/images/icon-bathroom.svg';
import { ReactComponent as IconBedSvg } from '../../assets/images/icon-bed.svg';
import { Text } from '../../styles/elements';
import { CardContent, CardIcons, CardImageLink, CardLink, CardWrapper } from './Card.styles';
import { ICardProps } from './Card.types';

export const Card = ({ data }: ICardProps): JSX.Element => {
    return (
        <CardWrapper>
            <CardImageLink href="/typography">
                <img src={data?.images[0]} alt={data?.title} />
            </CardImageLink>
            <div>
                <CardContent>
                    <CardLink href="/">
                        <Text bold>{data?.title}</Text>
                    </CardLink>
                    <Text>{data?.location?.fullAdress}</Text>
                    <Text bold secondary>{`$${data?.price ?? 0}`}</Text>
                </CardContent>
                <CardIcons>
                    <Text aria-label="Bedrooms" title="Bedrooms">
                        <IconBedSvg />
                        <span>{data?.bedRooms}</span>
                    </Text>
                    <Text aria-label="Bathrooms" title="Bathrooms">
                        <IconBathRoomSvg />
                        <span>{data?.bathRooms}</span>
                    </Text>
                    <Text aria-label="Area" title="Area">
                        <IconAreaSvg />
                        <span>{`${data?.area ?? 0} ft`}</span>
                        <sup>2</sup>
                    </Text>
                </CardIcons>
            </div>
        </CardWrapper>
    );
};
