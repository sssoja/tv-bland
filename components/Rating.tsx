import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  color,
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

const NoRating = styled.p<TypographyProps & ColorProps & SpaceProps>`
  ${typography};
  ${color};
  ${space};
`;

const RatingContainer = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  ${layout};
  ${space};
`;

const NumberRating = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Span = styled.span<SpaceProps & TypographyProps>`
  flex-direction: row;
  ${typography};
`;

const Rating = (props: RatingProps) => {
  if (props.rating.average === null) {
    return (
      <NoRating fontSize={1} color="grey" my={1}>
        No rating
      </NoRating>
    );
  }

  const maxRating = 5;
  const average = (props.rating.average / 2).toFixed(1);
  const roundedAverage = Math.round(props.rating.average / 2);
  const emptyStars = maxRating - roundedAverage;

  const rating = roundedAverage === 0 ? roundedAverage : average;

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
    <RatingContainer display={props.display} my={1}>
      <Span fontSize={2}>{renderFullStars()}</Span>
      <Span fontSize={2}>{renderEmptyStars()}</Span>
      {props.showNumbers && (
        <NumberRating fontSize={1} mx={2}>
          {rating} / 5
        </NumberRating>
      )}
    </RatingContainer>
  );
};

export default Rating;
