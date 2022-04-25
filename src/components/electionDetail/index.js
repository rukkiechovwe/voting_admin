import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainPage from "../mainPage";
import SubNav from "../subNav";
import { ElectionContext } from "../../context/electionContext";

function ElectionDetail({ children }) {
  const { getElectionYear } = useContext(ElectionContext);
  const navigate = useNavigate();

  let params = useParams();
  if (params.electionYear) {
    getElectionYear(params.electionYear);
  } else {
    console.log(params.electionYear);
    navigate("/");
  }

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
