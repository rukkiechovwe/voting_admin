import React from "react";
import { Box } from "@chakra-ui/react";
import Admin from "../../components/adminList";
import MainPage from "../../components/mainPage";

function AdminPage() {
  return (
    <MainPage>
      <Box p="20px">
        <Admin />
      </Box>
    </MainPage>
  );
}

export default AdminPage;
