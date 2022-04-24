import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import MainPage from "../../components/mainPage";

function StudentDetail() {
  const StudentInfo = ({ info, value }) => {
    return (
      <Text fontSize={16} w="50%" pb="20px">
        <span>{info}: </span>
        <span>
          <em>{value}</em>
        </span>
      </Text>
    );
  };
  return (
    <MainPage>
      <Box py="25px" px="35px">
        <Text fontSize={22} fontWeight="600">
          <span>Student / </span>
          <span>Name</span>
        </Text>
        <Text pb="20px" borderBottom="1bx sol">
          <span>Last Checked:</span>
          <span>Checked By:</span>
        </Text>

        <Flex
          bg="brand.white"
          color="brand.black"
          borderRadius="10px"
          p="20px"
          boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
          wrap="wrap"
        >
          <StudentInfo info="First Name" value="Emily" />
          <StudentInfo info="Last Name" value="Rose" />
          <StudentInfo info="Matriculation Number" value="PSC1707540" />
          <StudentInfo info="Student Email" value="emily.rose@uniben.edu" />
          <StudentInfo info="Level" value="400" />
          <StudentInfo info="Eligible" value="No" />
          <StudentInfo info="School Fees" value="" />
          <StudentInfo info="Dues" value="" />
        </Flex>
        <Button
          w="100%"
          bg="brand.primary"
          color="brand.white"
          border="none"
          boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
          mt="35px"
          py="24px"
        >
          Mark as Eligible
        </Button>
        <Button
          w="100%"
          bg="transparent"
          color="brand.danger"
          border="1px"
          borderColor="brand.danger"
          mt="20px"
          py="24px"
          _hover={{
            bg: "#FF0000 !important",
          }}
        >
          Mark as Not Eligible
        </Button>
      </Box>
    </MainPage>
  );
}

export default StudentDetail;
