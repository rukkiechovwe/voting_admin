import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
// import { Bell } from "phosphor-react";

const RecentVoteCard = ({ name }) => {
  return (
    <Flex
      w="100%"
      align="center"
      py="15px"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Box bg="brand.primary" borderRadius="full" h="40px" w="40px"></Box>

      <Flex w="88%" align="center" pl="15px">
        <Box>
          <Text fontSize="14px">{name}</Text>
          <Text fontSize="12px">Just now</Text>
        </Box>
        <Spacer />
        <Text
          bg="brand.primary"
          rounded="md"
          fontSize="11px"
          color="brand.white"
          py="4px"
          px="7px"
        >
          Voted
        </Text>
      </Flex>
    </Flex>
  );
};

export default RecentVoteCard;
