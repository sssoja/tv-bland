import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";

import styled from "styled-components";

const Flex = styled.div<
  FlexboxProps & SpaceProps & LayoutProps & PositionProps
>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;

export default Flex;
