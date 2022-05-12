import React from "react";
import { Flex } from "@chakra-ui/react";
import { SpinnerCircular } from "spinners-react";

export const Spinner = ({ size, color, height, background }) => {
  return (
    <Flex
      minH={height ? height : "calc(100vh - 61px - 90px)"}
      width="100%"
      justifyContent="center"
      alignItems="center"
      p="50px 0"
    >
      <SpinnerCircular
        size={size ? size : 80}
        color={color ? color : "#703bda"}
      />
    </Flex>
  );
};
