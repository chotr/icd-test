import { Container } from "@chakra-ui/react";
import theme from "../theme";

interface Props {
  children: React.ReactNode;
}

const MContainer: React.FC<Props> = ({ children }) => {
  const { pxToVw } = theme;
  return (
    <Container maxW={pxToVw(390)} px={pxToVw(20)}>
      {children}
    </Container>
  );
};

export default MContainer;
