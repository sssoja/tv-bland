import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./styles/Flex";
import Link from "next/link";
import styled from "styled-components";

const Message = styled.p<TypographyProps>`
  ${typography}
`;

const Container = styled.div<SpaceProps>`
  width: fit-content;
  position: absolute;
  top: 10%;
  ${space};
`;

const fallback = "https://media.giphy.com/media/LXtjHzZjC5WLu/giphy.gif";

const ErrorMessage = () => {
  return (
    <Flex p={6} alignItems="center" flexDirection="column">
      <Container p={6}>
        <Flex my={6} flexDirection="column">
          <Message>Oops, this page isn't available right now.</Message>
          <Message>Put the kettle on and come back in five.</Message>
        </Flex>
        <Link href="/">
          <a>
            <img alt="Error image" src={fallback} width={300} height={400} />
          </a>
        </Link>
      </Container>
    </Flex>
  );
};

export default ErrorMessage;
