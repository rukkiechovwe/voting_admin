import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Bell } from "phosphor-react";

const TopHeader = () => {
  return (
    <Flex w="100%" h="90px" bg="#FFF" align="center" px="20px">
      <Text fontSize="xl">Welcome, Admin</Text>
      <Spacer />
      <Flex align="center">
        <Bell size={24} />
        <Box ml="20px" borderRadius="full" h="50px" w="50px" bg="#E0E0E0"></Box>
      </Flex>
    </Flex>
  );
};

export default TopHeader;
