import { Box, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import checkCircle from "../../assets/icons/checkCircle.svg";
import { convertDate, convertTime } from "../../utils/convertTime";

const RecentVoteCard = ({ name, time }) => {
  const [convertedDate, setConvertedDate] = useState("");
  const [convertedTime, setConvertedTime] = useState("");
  useEffect(() => {
    const newTime = new Date(time.seconds * 1000);
    setConvertedDate(convertDate(newTime));
    setConvertedTime(convertTime(newTime));
  }, [time]);

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
          <Text fontSize="11px">
            {convertedDate} {convertedTime}
          </Text>
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
