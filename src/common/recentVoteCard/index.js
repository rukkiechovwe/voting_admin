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
      <Box borderRadius="full" h="40px" w="40px" bg="#E0E0E0" mr="15px"></Box>

      <Flex w="88%">
        <Box>
          <Text fontSize="14px">{name}</Text>
          <Text fontSize="12px">Just now</Text>
        </Box>
        <Spacer />
        <Text rounded="md" fontSize="14px" py="7px" px="10px" bg="#E0E0E0">
          Vote
        </Text>
      </Flex>
    </Flex>
  );
};

export default RecentVoteCard;
