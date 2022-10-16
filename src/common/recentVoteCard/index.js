import { Box, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import checkCircle from "../../assets/icons/checkCircle.svg";

const RecentVoteCard = ({ name, time }) => {
  // fix time
//   firebase timestamp is showing as seconds and nanoseconds...convert to normal date
//   console.log(time);

  return (
    <Flex
      w="100%"
      align="center"
      py="15px"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Img src={checkCircle} w="35px" h="35px" />
      <Flex w="100%" align="center" pl="15px">
        <Box>
          <Text fontSize="14px">{name}</Text>
          <Text fontSize="12px">Just now</Text>
        </Box>
        <Spacer />
        <Text
          bg="brand.primary"
          rounded="md"
          fontSize="11px"
          color="brand.white"
          py="4px"
          px="7px"
        >
          Voted
        </Text>
      </Flex>
    </Flex>
  );
};

export default RecentVoteCard;
