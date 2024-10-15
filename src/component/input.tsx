import { Input, InputProps } from "@chakra-ui/react";
import theme from "../theme";
import React from "react";

const MInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { pxToVw, colors } = theme;
  return (
    <Input
      {...props}
      ref={ref}
      borderRadius={pxToVw(3)}
      border={`${pxToVw(1)} solid #A1A1A1`}
      outline={"none"}
      fontSize={pxToVw(14)}
      transition={"all 0.2s ease-in-out"}
      boxShadow={"none"}
      h={pxToVw(44)}
      _placeholder={{ color: `${colors.gray02}` }}
      _focus={{
        borderColor: `${colors.main}`,
        outline: "none",
        boxShadow: "none",
      }}
    />
  );
});

export default MInput;
