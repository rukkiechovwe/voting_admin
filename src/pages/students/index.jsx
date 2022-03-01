import React from "react";
import TopHeader from "../../components/topHeader";
import { Box } from "@chakra-ui/react";
import Students from "../../components/students";

function StudentList() {
  return (
    <Box
      sx={{
        width: "calc(100% - 200px)",
      }}
    >
      <TopHeader />
      <Box p="20px">
        <Students fullPage={true} title="Students" />
      </Box>
    </Box>
    
  );
}

export default StudentList;
