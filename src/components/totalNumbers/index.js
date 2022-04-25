import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const TotalNumbers = () => {
  const Card = ({ title, number, last }) => {
    return last ? (
      <Box w="33.333%" pl="40px" >
        <Text fontSize="sm" color="brand.dark">
          {title}
        </Text>
        <Heading fontSize="21px" fontWeight="500" color="brand.black">
          {number}
        </Heading>
      </Box>
    ) : (
      <Box borderRight="2px" borderColor="brand.primary" w="33.333%" pl="40px">
        <Text fontSize="sm" color="brand.dark">
          {title}
        </Text>
        <Heading fontSize="21px" fontWeight="500" color="brand.black">
          {number}
        </Heading>
      </Box>
    );
  };
  return (
    <Flex
      bg="brand.white"
      w="100%"
      h="128px"
      borderRadius="10px"
      justify="space-between"
      alignItems="center"
      py="30px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
    >
      <Card title="Total Students" number="0" />
      <Card title="Total Voters" number="0" />
      <Card title="Total Votes" number="0" last={true} />
    </Flex>
  );
};

export default TotalNumbers;
