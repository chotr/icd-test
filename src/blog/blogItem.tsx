import { Box, Image, Text } from "@chakra-ui/react";
import theme from "../theme";
import { BlogProps } from "../store/interface/itf";


const BlogItem: React.FC<BlogProps> = (blog) => {
  const { pxToVw, colors } = theme;
  return (
    <Box>
      <Box
        position={"relative"}
        pt={"calc(100%*130/170)"}
        overflow={"hidden"}
        borderRadius={pxToVw(6)}
        mb={pxToVw(11)}
      >
        <Image
          src={blog.url}
          alt={blog.alt}
          position={"absolute"}
          inset={"0"}
          w={"full"}
          h={"full"}
        />
      </Box>
      <Text
        as={"h3"}
        fontSize={pxToVw(15)}
        color={colors.black01}
        fontWeight={"medium"}
        mb={pxToVw(6)}
        lineHeight={"1.2"}
      >
        {blog.title}
      </Text>
      <Text
        as={"p"}
        fontSize={pxToVw(14)}
        color={colors.black01}
        lineHeight={"1.2"}
      >
        {blog.content}
      </Text>
    </Box>
  );
};

export default BlogItem;
