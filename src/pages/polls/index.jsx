import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import Candidates from "../../components/candidates";
import ElectionDetail from "../../components/electionDetail";
import { CreatePoll } from "../../components/createPoll";
import { ElectionContext } from "../../context/electionContext";
import { Spinner } from "../../common/Spinner";
import CandidateCard from "../../common/candidateCard";
import { convertDate } from "../../utils/convertTime";

function Polls() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { electionYear, loading, candidatesDetail, electionDetail } =
    useContext(ElectionContext);
  const date = convertDate(`${electionDetail.startDate}`);
  return (
    <ElectionDetail>
      {loading ? (
        <Spinner />
      ) : candidatesDetail.length !== 0 ? (
        <Box p="20px" width="100%">
          <Flex mb="16px" justifyContent="space-between">
            <Box>
              <Heading fontSize="28px" fontWeight="500">
                {electionYear} Election
              </Heading>
              <Text pt="10px" fontSize="14px">
                Election starts on the {date} at {electionDetail.startTime}am
              </Text>
            </Box>
            <Box onClick={onOpen}>
              <ButtonGroup size="sm" isAttached variant="outline">
                <IconButton
                  aria-label="Create Poll"
                  p="8px"
                  height=" 45px"
                  width="45px"
                  borderRadius="30px"
                  bg="brand.primary"
                  color="brand.white"
                  border="none"
                  boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
                  icon={<Plus size={50} weight="bold" />}
                />
              </ButtonGroup>
            </Box>
          </Flex>

          {electionDetail.pollsAvailable.map((poll) => (
            <Candidates position={`${poll} Poll`} key={poll}>
              {candidatesDetail.map((candidate) => {
                if (candidate.pollName === poll) {
                  return (
                    <CandidateCard
                      key={candidate.name}
                      name={candidate.name}
                      image={candidate.imageUrl}
                      votes={candidate.votes}
                    />
                  );
                }
                return <div />;
              })}
            </Candidates>
          ))}
          <CreatePoll isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
      ) : (
        <Text p="50px 0" textAlign="center">
          <em>{electionYear} poll details are not available</em>
        </Text>
      )}
    </ElectionDetail>
  );
}

export default Polls;
