import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import theme from "../theme";

const Footer: React.FC = () => {
  const { pxToVw, colors } = theme;
  return (
    <Box
      as="footer"
      p={`${pxToVw(8)} ${pxToVw(13)}`}
      borderTop={`${pxToVw(1)} solid gray`}
    >
      <Flex gap={pxToVw(8)}>
        <Link as={NavLink} to="/home" display={"block"} w={pxToVw(20)}>
          <Image src={"./images/logo_footer.png"} alt="footer logo" />
        </Link>
        <Text fontSize={pxToVw(10.5)} mt={pxToVw(5)}>
          90/88B Nguyen Dinh Chieu, Da Kao Ward, District 1, Ho Chi Minh City
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
