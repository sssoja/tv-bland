import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./styled/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface ShowProps {
  rating: { average: number };
}

const NumberRating = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Rating = (props: ShowProps) => {
  const rating = Math.round(props.rating.average / 2);
  const maxRating = 5;
  const emptyStars = maxRating - rating;

  const renderFullStars = () => {
    return rating !== 0
      ? Array(rating).map(index => {
          return (
            <FontAwesomeIcon key={`fs${index}`} icon={faStar} color="grey" />
          );
        })
      : "";
  };

  const renderEmptyStars = () => {
    return emptyStars !== 0
      ? Array(emptyStars).map(index => {
          return (
            <FontAwesomeIcon
              key={`es${index}`}
              icon={faStar}
              color="lightGrey"
            />
          );
        })
      : "";
  };

  return (
    <Flex mr={4} flexDirection="row">
      <span>{renderFullStars()}</span>
      <span>{renderEmptyStars()}</span>
      <NumberRating fontSize={1}>{rating} / 5</NumberRating>
    </Flex>
  );
};

export default Rating;
