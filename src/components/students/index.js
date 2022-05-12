import React, { useContext } from "react";
import { Table, Thead, Tbody, Tr, Td, Box, Text, Link } from "@chakra-ui/react";
import { Spinner } from "../../common/Spinner";
import { Link as RL } from "react-router-dom";
import TableHead from "../../common/tableHead";
import { ElectionContext } from "../../context/electionContext";

const Students = ({ fullPage, title }) => {
  const { electionYear, loading, students } = useContext(ElectionContext);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : students.length !== 0 ? (
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
              {students.map((student) => (
                <Tr
                  _hover={{
                    background: " #c8c8c824",
                    borderRadius: "10px",
                    transition: "200ms all ease",
                  }}
                  key={student.email}
                >
                  <Link
                    as={RL}
                    color="#4f4f4f"
                    width=" 100%"
                    display=" contents"
                    to={`/elections/${electionYear}/student-detail/${`${student.fname} ${student.lname}`
                      .split(" ")
                      .join("_")}`}
                  >
                    <Td borderBottom="none">
                      {student.fname} {student.lname}
                    </Td>
                    <Td borderBottom="none">{student.matNo}</Td>
                    <Td borderBottom="none" sx={{ wordWrap: " anywhere" }}>
                      {student.email}
                    </Td>
                    <Td borderBottom="none" className="student_none">
                      {student.level}
                    </Td>
                    <Td borderBottom="none" className="student_none">
                      {student.eligible ? "Yes" : "No"}
                    </Td>
                  </Link>
                </Tr>
              ))}
              {/* <Tr position="relative">
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
              </Tr> */}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Text p="50px 0" textAlign="center">
          <em> No students registered for {electionYear} election yet</em>
        </Text>
      )}
    </>
  );
};

export default Students;
