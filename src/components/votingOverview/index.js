import {  Flex, Text } from "@chakra-ui/react";
import VotingOverviewCard from "../../common/votingOverviewCard";

const VotingOverview = () => {
  const Card = ({ title, number }) => {
    return (
      <Flex flexDirection="column" w="full">
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
      justify="space-between"
      p="15px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
    >
      <Card title="President" />
      <Card title="Vice-President" />
      <Card title="Secretary" />
    </Flex>
  );
};

export default VotingOverview;
