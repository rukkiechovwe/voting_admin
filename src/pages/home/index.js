import React from "react";
import TopHeader from "../../components/topHeader";
import { Box } from "@chakra-ui/react";
import RecentVotes from "../../components/recentVotes";
import TotalNumbers from "../../components/totalNumbers";

function Home() {
  return (
    <Box px="20px">
      <TopHeader />
      <TotalNumbers/>
      <RecentVotes/>
    </Box>
  );
}

export default Home;
