import React, { useContext, useEffect, useState, useMemo } from "react";
import { ElectionContext } from "../../context/electionContext";
import { Flex, Text } from "@chakra-ui/react";
import VotingOverviewCard from "../../common/votingOverviewCard";

const Card = ({ title, number }) => {
  return (
    <Flex
      flexDirection="column"
      minW="200px"
      sx={{
        width: "100%",
        "@media screen and (min-width: 500px)": {
          width: "50%",
        },
        "@media screen and (min-width: 680px)": {
          width: "33.33%",
        },
        "@media screen and (min-width: 1024px)": {
          width: "50%",
        },
        "@media screen and (min-width: 1130px)": {
          width: "33.33%",
        },

        "@media screen and (min-width: 1400px)": {
          width: "25%",
        },
      }}
    >
      <Text fontSize="16px" m="8px">
        {title}
      </Text>
      <VotingOverviewCard />
      <VotingOverviewCard />
    </Flex>
  );
};

/*===========================
WHAT TO DO HERE IN THIS COMPONENT
1. Get electiondetails using the getElectionDetails function from the electionContext
2. Use this election detail to get the polls available
3. Display an overview of 3 or 6 polls with 1 or 2 candidate(s) with highest votes
===========================*/

const VotingOverview = () => {
  const { candidatesDetail, electionDetail } = useContext(ElectionContext);

  //   const getPolls = useMemo(() => {
  //    console.log(electionDetail);
  //     // loop through candidates and find the one that matches the current poll
  //     return electionDetail.pollsAvailable.reduce((acc, curr) => {
  //       candidatesDetail.forEach((candidate) => {
  //         if (candidate.pollName === curr && !acc.includes(candidate.pollName)) {
  //           acc.push(candidate.pollName);
  //         }
  //       });
  //       return acc;
  //     }, []);
  //   }, [candidatesDetail, electionDetail]);

  return (
    <Flex
      bg="brand.white"
      w="100%"
      borderRadius="10px"
      p="15px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      flexWrap="wrap"
    >
      {/* {electionDetail.pollsAvailable.map(
        (poll, index) =>
          getPolls[index] && (
            <Card title={getPolls[index]} key={poll} />
            // <Candidates position={`${getPolls[index]} Poll`} key={poll}>
            //   {candidatesDetail.map((candidate) => {
            //     if (candidate.pollName === getPolls[index]) {
            //       return (
            //         <CandidateCard
            //           key={candidate.name}
            //           name={candidate.name}
            //           image={candidate.imageUrl}
            //           votes={candidate.votes}
            //         />
            //       );
            //     }
            //   })}
            // </Candidates>
          )
      )} */}
      <Card title="President" />
      <Card title="Vice-President" />
      <Card title="Secretary" />
      {/* <Text width="100%" textAlign="center" p="30px 0">
        <em>Voting is yet to begin</em>
      </Text> */}
    </Flex>
  );
};

export default VotingOverview;
