import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const CandidateCard = () => {
  return (
    <Flex
      bg="#F2F2F2"
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
          width: "calc(100% - 70px)",
        }}
      >
        <Heading fontSize="22px" fontWeight="500">
          Ejikeme Charles Bernard
        </Heading>
        <Text rounded="md" fontSize="14px" mt="5px" py="8px" px="20px" bg="#E0E0E0">
          20 Votes
        </Text>
      </Flex>
      <Box ml="20px" borderRadius="full" h="70px" w="70px" bg="#E0E0E0"></Box>
    </Flex>
  );
};

export default CandidateCard;
