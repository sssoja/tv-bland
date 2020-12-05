import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./styled/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface ShowProps {
  rating: { average: number | null };
}

const NumberRating = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Rating = (props: ShowProps) => {
  if (props.rating.average === null) {
    return <NumberRating fontSize={1}>No rating</NumberRating>;
  }
  const rating = Math.round(props.rating.average / 2);
  const maxRating = 5;
  const emptyStars = maxRating - rating;

  const renderFullStars = () => {
    return rating !== 0
      ? Array(rating)
          .fill(null)
          .map((star, i) => {
            return (
              <FontAwesomeIcon key={`fs${i}`} icon={faStar} color="grey" />
            );
          })
      : "";
  };

  const renderEmptyStars = () => {
    return emptyStars !== 0
      ? Array(emptyStars)
          .fill(null)
          .map((star, i) => {
            return (
              <FontAwesomeIcon key={`es${i}`} icon={faStar} color="lightGrey" />
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
