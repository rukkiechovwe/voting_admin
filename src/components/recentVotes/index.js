import { Box, Heading, Flex, Spacer, Text } from "@chakra-ui/react";
import RecentVoteCard from "../../common/recentVoteCard";
// import { Bell } from "phosphor-react";

const RecentVotes = () => {
  return (
    <Box w="390px" border="1px" borderColor="gray.200" borderRadius="10px">
      <Box w="100%" bg="#F2F2F2" p="20px">
        <Text fontSize="xl">Recent Votes</Text>
      </Box>
      <Box px="15px">
        <RecentVoteCard name=" Ufuoma Oghenechovwe" />
        <RecentVoteCard name="Nathaniel James" />
        <RecentVoteCard name="Stanley Akpama" />
        <RecentVoteCard name="Favour Ugobor" />
      </Box>
    </Box>
  );
};

export default RecentVotes;
