import React from "react";
import { Flex } from "@chakra-ui/react";
import ResetPassword from "../../components/resetPassword";
import MainPage from "../../components/mainPage";

function Account() {
  return (
    <MainPage>
      <Flex justifyContent="center" alignItems="center" h="80vh" p="20px">
        <ResetPassword />
      </Flex>
    </MainPage>
  );
}

export default Account;
