import styled from "styled-components";
import {
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

const Grid = styled.div<GridProps & SpaceProps & LayoutProps & TypographyProps>`
  display: grid;
  ${grid};
  ${space};
  ${layout};
  ${typography}
`;

export default Grid;
