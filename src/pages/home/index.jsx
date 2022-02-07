import React from "react";
import TopHeader from "../../components/topHeader";
import { Box, Flex } from "@chakra-ui/react";
import RecentVotes from "../../components/recentVotes";
import Students from "../../components/students";
import TotalNumbers from "../../components/totalNumbers";
import VotingOverview from "../../components/votingOverview";

function Home() {
  return (
    <Box
      px="20px"
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 200px)",
        },
      }}
    >
      <TopHeader />
      <Flex
        sx={{
          flexDirection: "column",
          "@media screen and (min-width: 880px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            "@media screen and (min-width: 880px)": {
              width: "calc(100% - 320px)",
            },
          }}
        >
          <TotalNumbers />
          <VotingOverview />
          <Students title="Recent Students" />
        </Box>
        <Box>
          <RecentVotes />
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
