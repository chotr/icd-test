import { Outlet } from "react-router-dom";
import Header from "../header";
import { Box } from "@chakra-ui/react";

const Layout: React.FC = () => {
  return (
    <Box>
      <Header />
      <Outlet></Outlet>
    </Box>
  );
};

export default Layout;
