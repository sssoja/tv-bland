import {
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  grid,
  layout,
  space,
  typography,
} from "styled-system";

import styled from "styled-components";

const Grid = styled.div<GridProps & SpaceProps & LayoutProps & TypographyProps>`
  display: grid;
  ${grid};
  ${space};
  ${layout};
  ${typography}
`;

export default Grid;
