import React from "react";
import { Box } from "@chakra-ui/react";
import Students from "../../components/students";
import ElectionDetail from "../../components/electionDetail";

function StudentList() {
  return (
    <ElectionDetail>
      <Box p="20px" width="100%">
        <Students fullPage={true} title="Students" />
      </Box>
    </ElectionDetail>
  );
}

export default StudentList;
