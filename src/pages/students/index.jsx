import React from "react";
import TopHeader from "../../components/topHeader";
import { Box, Flex } from "@chakra-ui/react";
import Students from "../../components/students";

function StudentList() {
  return (
    <Box
      px="20px"
      sx={{
        width: "calc(100% - 200px)",
      }}
    >
      <TopHeader />
      <Students fullPage={true} title="Students" />
    </Box>
  );
}

export default StudentList;
