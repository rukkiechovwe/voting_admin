import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const CandidateCard = () => {
  return (
    <Flex
      bg="brand.white"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      borderRadius="10px"
      mr="16px"
      mb="16px"
      p="20px"
      sx={{
        ":last-child": {
          marginRight: 0,
        },
        width: "47.7%",
        "@media screen and (min-width: 960px)": {
          width: "100%",
        },
      }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          width: "calc(100% - 90px)",
        }}
        mr="20px"
      >
        <Heading fontSize="20px" fontWeight="500">
          Ejikeme Charles Bernard
        </Heading>
        <Text
          rounded="md"
          fontSize="14px"
          bg="brand.primary"
          color="brand.white"
          mt="25px"
          py="5px"
          px="15px"
        >
          20 Votes
        </Text>
      </Flex>
      <Box borderRadius="full" h="70px" w="70px" bg="#E0E0E0"></Box>
    </Flex>
  );
};

export default CandidateCard;
