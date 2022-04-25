import { Table, Thead, Tbody, Tr, Td, Box, Text, Link } from "@chakra-ui/react";
import { Link as RL } from "react-router-dom";
import TableHead from "../../common/tableHead";

const Students = ({ fullPage, title }) => {
  return (
    <Box
      bg="brand.white"
      color="brand.black"
      borderRadius="10px"
      
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
    >
      <Box
        w="100%"
        p="25px 20px"
        borderBottom="1px solid"
        borderColor="brand.borderColor"
      >
        <Text fontSize="1.1rem" color="Background.black">
          {title}
        </Text>
      </Box>
      <Table variant="simple" position="relative" minH="71px">
        <Thead>
          <Tr>
            <TableHead text="Name" />
            <TableHead text="Matriculation Number" />
            <TableHead text="Student Email" />
            <TableHead text="Level" className="student_none" />
            <TableHead text="Eligible" className="student_none" />
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr
            _hover={{
              background: " #c8c8c824",
              borderRadius: "10px",
              transition: "200ms all ease",
            }}
          >
            <Link
              as={RL}
              color="#4f4f4f"
              width=" 100%"
              display=" contents"
              to="/student-detail"
            >
              <Td borderBottom="none">Emily Rose</Td>
              <Td borderBottom="none">PSC1707540</Td>
              <Td borderBottom="none" sx={{ wordWrap: " anywhere" }}>
                emily.rose@psc.uniben.edu
              </Td>
              <Td borderBottom="none" className="student_none">
                400
              </Td>
              <Td borderBottom="none" className="student_none">
                No
              </Td>
            </Link>
          </Tr> */}
          <Tr position="relative">
            <Td p="40px 0">
              <Text
                position="absolute"
                top="30px"
                width="100%"
                textAlign="center"
                fontSize="14px"
              >
                <em>No students registered yet</em>
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Students;
