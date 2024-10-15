import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import theme from "../theme";

const Header: React.FC = () => {
  const { pxToVw, colors } = theme;
  return (
    <Box
      as={"nav"}
      w={"full"}
      position={"sticky"}
      top={"0"}
      zIndex={"999"}
      backgroundColor={"white"}
      boxShadow={`0 0 ${pxToVw(3)} 0 rgba(0,0,0,0.29)`}
    >
      <Flex
        alignItems={"center"}
        gap={"3vw"}
        justifyContent={"space-between"}
        pl={pxToVw(10)}
      >
        <Link as={NavLink} to="/" display={"block"} w={pxToVw(100)}>
          <Image src={"./images/LOGO_ICDVN.svg"} alt="" />
        </Link>
        <Link
          as={NavLink}
          to={"/form-contact"}
          display={"block"}
          w={pxToVw(40)}
          h={pxToVw(40)}
          bg={colors.main}
          p={pxToVw(10)}
        >
          <Image src={"./images/mail.svg"} alt="" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
