import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import RecentVotes from "../../components/recentVotes";
import Students from "../../components/students";
import TotalNumbers from "../../components/totalNumbers";
import VotingOverview from "../../components/votingOverview";
import ElectionDetail from "../../components/electionDetail";

function Overview() {
  return (
    <ElectionDetail>
      <Flex
        px="20px"
        py="20px"
        width="100%"
        sx={{
          flexDirection: "column",
          "@media screen and (min-width: 1024px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            "@media screen and (min-width: 1024px)": {
              width: "calc(100% - 320px)",
            },
          }}
        >
          <TotalNumbers />
          <VotingOverview />
          <Students title="Recent Students" />
        </Box>
        <RecentVotes />
      </Flex>
    </ElectionDetail>
  );
}

export default Overview;
