import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./styles/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRouter } from "next/router";

interface ShowProps {
  rating: { average: number | null };
}

const NoRating = styled.p<TypographyProps>`
  ${typography};
`;

const NumberRating = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Rating = (props: ShowProps) => {
  const location = useRouter();
  const hideRating = "/";

  if (hideRating.includes(location.pathname)) {
    return null;
  }
  if (props.rating.average === null) {
    return <NoRating fontSize={1}>No rating</NoRating>;
  }

  const rating = Math.round(props.rating.average / 2);
  const maxRating = 5;
  const emptyStars = maxRating - rating;

  // TO DO all ratings equal to zero display as an integer not 0.0
  // const zero = rating === 0 ? Math.round(zero) : average.toFixed(1);

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
    <Flex flexDirection="row">
      {" "}
      <span>{renderFullStars()}</span>
      <span>{renderEmptyStars()}</span>
      <NumberRating fontSize={1} mx={2}>
        {rating} / 5
      </NumberRating>
    </Flex>
  );
};

export default Rating;
