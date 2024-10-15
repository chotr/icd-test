import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import DataList from "../assets/data";
import theme from "../theme";
import BlogItem from "./blogItem";
import { BlogProps } from "../store/interface/itf";

const Blog: React.FC = () => {
  const { BlogList } = DataList;
  const { pxToVw, colors } = theme;
  return (
    <Flex flexWrap={"wrap"} mx={pxToVw(-5)}>
      {BlogList?.map((blog: BlogProps, index: number) => (
        <Box key={index} w={"50%"} px={pxToVw(5)} mb={pxToVw(20)}>
          <BlogItem {...blog} />
        </Box>
      ))}
    </Flex>
  );
};

export default Blog;
