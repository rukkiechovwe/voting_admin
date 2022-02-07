import { Table, Thead, Tbody, Tr, Td, Box, Text } from "@chakra-ui/react";
import TableHead from "../../common/tableHead";

const Students = ({ fullPage, title }) => {
  return (
    <Box
      bg="brand.white"
      color="brand.black"
      borderRadius="10px"
      p="10px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(117, 117, 117, 0.17)"
    >
      <Box
        w="100%"
        p="20px"
        borderBottom="1px solid"
        borderColor="brand.primary"
      >
        <Text fontSize="1.1rem" color="Background.black">{title}</Text>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHead text="Name" />
            <TableHead text="Matriculation Number" />
            <TableHead text="Student Email" />
            {fullPage && <TableHead text="Level" />}
            {fullPage && <TableHead text="Eligible" />}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderBottom="none">Emily Rose</Td>
            {/* <Td>Rose</Td> */}
            <Td borderBottom="none">PSC1707540</Td>

            <Td borderBottom="none" sx={{ "word-wrap": " anywhere" }}>
              emily.rose@psc.uniben.edu
            </Td>
            {fullPage && <Td borderBottom="none">400</Td>}
            {fullPage && <Td borderBottom="none">Yes</Td>}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Students;
