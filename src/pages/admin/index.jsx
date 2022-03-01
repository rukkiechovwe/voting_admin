import React from "react";
import TopHeader from "../../components/topHeader";
import { Box } from "@chakra-ui/react";
import Admin from "../../components/adminList";

function AdminPage() {
  return (
    <Box
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 200px)",
        },
      }}
    >
      <TopHeader />
      <Box p="20px">
        <Admin />
      </Box>
    </Box>
  );
}

export default AdminPage;
