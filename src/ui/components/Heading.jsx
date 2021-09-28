import { Heading as ChakraHeading } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionHeading = motion(ChakraHeading);

export const Heading = ({
  children,
  innerRef,
  bgGradient,
  fontSize = "6xl",
  textAlign = "center",
  color,
  ...props
}) => {
  return (
    <MotionHeading
      {...props}
      {...{
        ...(bgGradient == undefined
          ? color == undefined
            ? { color: "lendlab.black.heading" }
            : { color }
          : {
              bgGradient,
            }),
      }}
      ref={innerRef}
      fontSize={fontSize}
      fontWeight="900"
      textAlign={textAlign}
      letterSpacing="tighter"
    >
      {children}
    </MotionHeading>
  );
};
