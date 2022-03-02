import React from "react";
import TopHeader from "../../components/topHeader";
import { Box, Flex } from "@chakra-ui/react";
import ResetPassword from "../../components/resetPassword";

function Account() {
  return (
    <Box
      sx={{
        width: "calc(100% - 200px)",
      }}
    >
      <TopHeader />
      <Flex justifyContent="center" alignItems="center" h="80vh" p="20px">
        <ResetPassword />
      </Flex>
    </Box>
  );
}

export default Account;
