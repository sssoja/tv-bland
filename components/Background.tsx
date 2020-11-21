import styled from "styled-components";
import { background, BackgroundProps, color, ColorProps } from "styled-system";

const Background = styled.div<BackgroundProps & ColorProps>`
  ${background};
  ${color};
`;

export default Background;
