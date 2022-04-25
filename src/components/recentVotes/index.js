import { Box, Text } from "@chakra-ui/react";
import RecentVoteCard from "../../common/recentVoteCard";

const RecentVotes = () => {
  return (
    <Box
      bg="brand.white"
      sx={{
        width: "100%",
        marginLeft: "0px",
        marginTop: "20px",
        "@media screen and (min-width: 1024px)": {
          width: " 320px",
          marginLeft: "20px",
          marginTop: "0px",
        },
      }}
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      borderRadius="10px"
    >
      <Box w="100%" p="20px" borderBottom="1px" borderColor="brand.borderColor">
        <Text fontSize="1.1rem">Recent Votes</Text>
      </Box>
      <Box px="15px">
        {/* <RecentVoteCard name=" Ufuoma Oghenechovwe" />
        <RecentVoteCard name="Stanley Akpama" /> */}
        <Text textAlign="center" p="30px 0">
          <em>No votes yet</em>
        </Text>
      </Box>
    </Box>
  );
};

export default RecentVotes;
