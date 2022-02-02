import { Box, Heading, Flex, Spacer, Text } from "@chakra-ui/react";
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
      <Box borderRadius="full" h="50px" w="50px" bg="#E0E0E0" mr="15px"></Box>

      <Flex w="88%">
        <Flex direction="column">
          <Text fontSize="md">{name}</Text>
          <Text fontSize="sm">Just now</Text>
        </Flex>
        <Spacer />
        <Text rounded="md" p="10px" bg="#E0E0E0">
          Vote
        </Text>
      </Flex>
    </Flex>
  );
};

export default RecentVoteCard;
