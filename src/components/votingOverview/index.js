import { Flex, Text } from "@chakra-ui/react";
import VotingOverviewCard from "../../common/votingOverviewCard";

const VotingOverview = () => {
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
      {/* <Card title="President" />
      <Card title="Vice-President" />
      <Card title="Secretary" />
      <Card title="Secretary" /> */}
      <Text width="100%" textAlign="center" p="30px 0">
        <em>Voting is yet to begin</em>
      </Text>
    </Flex>
  );
};

export default VotingOverview;
