import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainPage from "../mainPage";
import SubNav from "../subNav";
import { ElectionContext } from "../../context/electionContext";

function ElectionDetail({ children }) {
  const { getElectionYear } = useContext(ElectionContext);

  let params = useParams();
  if (params.electionYear) {
    getElectionYear(params.electionYear);
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
