import { Box, Text } from "@chakra-ui/react";
import theme from "../theme";
import MContainer from "../component/container";
import Button from "../component/button";
import { useNavigate } from "react-router-dom";

const SuccesPage: React.FC = () => {
  const { pxToVw, colors } = theme;
  const navigate = useNavigate();
  return (
    <Box pt={pxToVw(40)} minH={"90vh"}>
      <MContainer>
        <Text
          as={"h2"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={colors.main}
          mb={pxToVw(14)}
          fontSize={pxToVw(22)}
        >
          THANK YOU
        </Text>
        <Text
          as={"p"}
          textAlign={"center"}
          mb={pxToVw(40)}
          fontSize={pxToVw(14)}
        >
          Thank you for your contact. <br /> Our staff will contact you as soon
          as possible. <br />
          Thank you for your patience.
        </Text>
        <Button onClick={() => navigate("/")}>Top</Button>
      </MContainer>
    </Box>
  );
};

export default SuccesPage;
