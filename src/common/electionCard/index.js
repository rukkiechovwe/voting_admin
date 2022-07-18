import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import { Link as RL } from "react-router-dom";

const ElectionCard = ({
  year,
  startDate,
  startTime,
  endDate,
  endTime,
  minimumLevel,
  link,
}) => {
  return (
    <Box
      bg="brand.white"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      borderRadius="10px"
      p="20px"
      w="100%"
    >
      <Heading fontSize="20px" fontWeight="500" pb="10px">
        Election {year}
      </Heading>
      <Flex flexDirection="column">
        <Text pb="5px" fontSize="13px">
          Start Date: {startDate}
        </Text>
        <Text pb="5px" fontSize="13px">
          End Date: {endDate}
        </Text>
        <Text pb="5px" fontSize="13px">
          Start Time: {startTime}
        </Text>
        <Text pb="5px" fontSize="13px">
          End Time: {endTime}
        </Text>
        <Text pb="5px" fontSize="13px">
          Minimum Level: {minimumLevel}
        </Text>
      </Flex>
    </Box>
  );
};

export default ElectionCard;
