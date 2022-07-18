import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import RecentVotes from "../../components/recentVotes";
import Students from "../../components/students";
import TotalNumbers from "../../components/totalNumbers";
import VotingOverview from "../../components/votingOverview";
import ElectionDetail from "../../components/electionDetail";
import { ElectionContext } from "../../context/electionContext";
import { Spinner } from "../../common/Spinner";

function Overview() {
  const { electionDetail, electionYear, loading } = useContext(ElectionContext);

  return (
    <ElectionDetail>
      {loading ? (
        <Spinner />
      ) : electionDetail.length !== 0 ? (
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
      ) : (
        <Text p="50px 0" textAlign="center">
          <em>{electionYear} election details not available</em>
        </Text>
      )}
    </ElectionDetail>
  );
}

export default Overview;
