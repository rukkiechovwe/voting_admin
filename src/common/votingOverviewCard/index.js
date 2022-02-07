import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const VotingOverviewCard = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      bg="brand.primary"
      borderRadius="10px"
      h="100px"
      m="8px"
      p="20px"
    >
      <Text fontSize="12px" color="brand.white">
        Candidate 1
      </Text>
      <Flex justifyContent="space-between">
        <Heading fontSize="21px" fontWeight="500" color="brand.white">
          7,4576
        </Heading>
        <Text rounded="md" fontSize="11px" py="3px" px="10px" bg="brand.light">
          5.2%
        </Text>
      </Flex>
    </Flex>
  );
};

export default VotingOverviewCard;
