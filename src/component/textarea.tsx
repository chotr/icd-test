import { Textarea, TextareaProps } from "@chakra-ui/react";
import theme from "../theme";
import React from "react";

const MTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { pxToVw, colors } = theme;
    return (
      <Textarea
        ref={ref}
        {...props}
        borderRadius={pxToVw(3)}
        border={`${pxToVw(1)} solid #A1A1A1`}
        outline={"none"}
        fontSize={pxToVw(14)}
        transition={"all 0.2s ease-in-out"}
        boxShadow={"none"}
        _placeholder={{ color: `${colors.gray02}` }}
        _focus={{
          borderColor: `${colors.main}`,
          outline: "none",
          boxShadow: "none",
        }}
      ></Textarea>
    );
  }
);

export default MTextarea;
