import { TypographyProps, typography } from "styled-system";

import Flex from "./styled/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface ShowProps {
  rating: { average: number | null };
}

const NoRating = styled.p<TypographyProps>`
  ${typography};
`;

const NumberRating = styled.p<TypographyProps>`
  ${typography};
`;

const Rating = (props: ShowProps) => {
  if (props.rating.average === null) {
    return <NoRating fontSize={1}>No rating</NoRating>;
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
