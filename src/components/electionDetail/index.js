import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainPage from "../mainPage";
import SubNav from "../subNav";
import { ElectionContext } from "../../context/electionContext";

function ElectionDetail({ children }) {
  const {
    getElectionYear,
    getStudents,
    getElectionDetail,
    getCandidatesDetail,
  } = useContext(ElectionContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const year = params.electionYear;
    if (year) {
      getElectionYear(year);
      getStudents(year);
      getElectionDetail(year);
      getCandidatesDetail(year);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainPage>
      <Flex flexDirection="column">
        <SubNav />
        {children}
      </Flex>
    </MainPage>
  );
}

export default ElectionDetail;
