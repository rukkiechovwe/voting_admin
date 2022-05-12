import { Box, Flex, Text } from "@chakra-ui/react";

const Candidates = ({ position, children }) => {
  return (
    <Box mb="2rem">
      <Text
        fontSize="1.2rem"
        as="h5"
        color="Background.black"
        p="10px"
        m="25px 10px 8px 8px"
        boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
        borderRadius="10px"
        background="brand.white"
      >
        {position}:
      </Text>
      <Flex
        sx={{
          flexWrap: "wrap",
          //  "@media screen and (min-width: 960px)": {
          //    flexWrap: "nowrap",
          //  },
        }}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Candidates;
