import { Table, Thead, Tbody, Tr, Td, Box, Text, Link } from "@chakra-ui/react";
import { Link as RL } from "react-router-dom";
import TableHead from "../../common/tableHead";

const Students = ({ fullPage, title }) => {
  return (
    <Box
      bg="brand.white"
      color="brand.black"
      borderRadius="10px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
    >
      <Box
        w="100%"
        p="20px"
        borderBottom="1px solid"
        borderColor="brand.borderColor"
      >
        <Text fontSize="1.1rem" color="Background.black">
          {title}
        </Text>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHead text="Name" />
            <TableHead text="Matriculation Number" />
            <TableHead text="Student Email" />
            {fullPage && <TableHead text="Level" />}
            {fullPage && <TableHead text="Eligible" />}
            {/* <TableHead /> */}
          </Tr>
        </Thead>
        <Tbody>
          <Tr
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
              {/* <Td>Rose</Td> */}
              <Td borderBottom="none">PSC1707540</Td>
              <Td borderBottom="none" sx={{ "wordWrap": " anywhere" }}>
                emily.rose@psc.uniben.edu
              </Td>
              {fullPage && <Td borderBottom="none">400</Td>}
              {fullPage && <Td borderBottom="none">No</Td>}
              {/* <Td borderBottom="none">
              <Link color="#4f4f4f" to="/">
                <Eye size={20} />
              </Link>
            </Td> */}
            </Link>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Students;
