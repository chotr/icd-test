import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme";
import Blog from "../../blog";
import Button from "../../component/button";
import MContainer from "../../component/container";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const { pxToVw, colors } = theme;
  const navigation = useNavigate();
  return (
    <Box as={"section"} pt={pxToVw(34)} pb={pxToVw(40)}>
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
          About us
        </Text>

        <Box mb={pxToVw(20)}>
          <Blog />
        </Box>
        <Button onClick={() => navigation("/form-contact")}>Contact</Button>
      </MContainer>
    </Box>
  );
};

export default AboutUs;
