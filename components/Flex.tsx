import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";

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
