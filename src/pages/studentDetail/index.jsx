import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FileArrowDown } from "phosphor-react";
import MainPage from "../../components/mainPage";
import { Spinner } from "../../common/Spinner";
import { ElectionContext } from "../../context/electionContext";
import {
  db,
  firestore_doc,
  firestore_getDoc,
  firestore_updateDoc,
} from "../../firebase";

function StudentDetail() {
  const [loading, setLoading] = useState(true);
  const [tload, setTload] = useState(false);
  const [fload, setFload] = useState(false);
  const [student, setStudent] = useState([]);
  const { electionYear } = useContext(ElectionContext);
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    async function checkParam() {
      if (params.studentName) {
        setLoading(true);
        const docRef = firestore_doc(
          db,
          electionYear,
          "students",
          `${electionYear}_students`,
          params.studentName
        );
        const docSnap = await firestore_getDoc(docRef);
        if (docSnap.exists()) {
         //  console.log("Document data:", docSnap.data());
          setStudent(docSnap.data());
        }
        setLoading(false);
      } else {
        navigate(`/elections/${electionYear}/students`);
      }
    }

    checkParam()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const StudentInfo = ({ info, value, link }) => {
    return (
      <Text fontSize={16} w="50%" pb="20px" display="flex" alignItems="center">
        <span>{info}: </span>
        {value && (
          <span style={{ marginLeft: "5px" }}>
            <em>{value}</em>
          </span>
        )}
        {link && (
          <a href={link} style={{ marginLeft: "10px" }}>
            <FileArrowDown size={24} color="#4f4f4f" />
          </a>
        )}
      </Text>
    );
  };

  const markEligibility = async (isEligible) => {
    isEligible ? setTload(true) : setFload(true);
    const studentRef = firestore_doc(
      db,
      electionYear,
      "students",
      `${electionYear}_students`,
      params.studentName
    );

    await firestore_updateDoc(studentRef, {
      eligible: isEligible,
    });
    isEligible ? setTload(false) : setFload(false);
  };

  return (
    <MainPage>
      {loading ? (
        <Spinner />
      ) : student !== null ? (
        <Box py="25px" px="35px">
          <Text fontSize={22} fontWeight="600">
            <span>Student / </span>
            <span>
              {student.fname} {student.lname}
            </span>
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
            <StudentInfo info="First Name" value={student.fname} />
            <StudentInfo info="Last Name" value={student.lname} />
            <StudentInfo info="Matriculation Number" value={student.matNo} />
            <StudentInfo info="Student Email" value={student.email} />
            <StudentInfo info="Level" value={student.level} />
            <StudentInfo
              info="Eligible"
              value={student.eligible ? "Yes" : "No"}
            />
            <StudentInfo info="School Fees" link={student.feesUrl} />
            <StudentInfo info="Dues" link={student.duesUrl} />
          </Flex>
          <Button
            w="100%"
            bg="brand.primary"
            color="brand.white"
            border="none"
            boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
            mt="35px"
            py="24px"
            onClick={() => markEligibility(true)}
          >
            {tload ? "loading..." : " Mark as Eligible"}
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
            onClick={() => markEligibility(false)}
          >
            {fload ? "loading..." : "Mark as Not Eligible"}
          </Button>
        </Box>
      ) : (
        <Text p="50px 0" textAlign="center">
          <em> Student is not available </em>
        </Text>
      )}
    </MainPage>
  );
}

export default StudentDetail;
