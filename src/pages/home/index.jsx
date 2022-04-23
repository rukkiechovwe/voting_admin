import React from "react";
import { Outlet } from "react-router-dom";

import TopHeader from "../../components/topHeader";
import { Box, Flex } from "@chakra-ui/react";
import RecentVotes from "../../components/recentVotes";
import Students from "../../components/students";
import TotalNumbers from "../../components/totalNumbers";
import VotingOverview from "../../components/votingOverview";

function Home() {
  return (
    <Box
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 200px)",
        },
      }}
    >
      <TopHeader />

      <Flex
        px="20px"
        py="20px"
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
      <Outlet />
    </Box>
  );
}

export default Home;
