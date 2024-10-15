import { Outlet } from "react-router-dom";
import Header from "../header";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Footer from "../footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box as={"main"} minH={'80vh'} flex={1}>
        <Outlet></Outlet>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
