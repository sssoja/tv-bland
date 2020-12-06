import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface RatingProps {
  rating: { average: number | null };
  display?: string[];
  showNumbers?: boolean;
}

const NoRating = styled.p<TypographyProps>`
  ${typography};
`;

const RatingContainer = styled.div<LayoutProps & SpaceProps & FlexboxProps>`
  display: flex;
  ${layout};
  ${space};
  ${flexbox};
`;

const NumberRating = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Rating = (props: RatingProps) => {
  if (props.rating.average === null) {
    return <NoRating fontSize={1}>No rating</NoRating>;
  }

  const average = props.rating.average / 2;
  const maxRating = 5;
  const roundedAverage = Math.round(average / 2);
  const emptyStars = maxRating - roundedAverage;

  // TO DO all ratings equal to zero display as an integer not 0.0
  const rating = average === 0 ? roundedAverage : average.toFixed(1);

  const renderFullStars = () => {
    return roundedAverage !== 0
      ? Array(roundedAverage)
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
    <RatingContainer display={props.display}>
      <span>{renderFullStars()}</span>
      <span>{renderEmptyStars()}</span>
      {props.showNumbers && (
        <NumberRating fontSize={1} mx={2}>
          {rating} / 5
        </NumberRating>
      )}
    </RatingContainer>
  );
};

export default Rating;
