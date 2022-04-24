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

function Polls() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { electionYear } = useContext(ElectionContext);

  return (
    <ElectionDetail>
      <Box p="20px" width="100%">
        <Flex mb="16px" justifyContent="space-between">
          <Box>
            <Heading fontSize="28px" fontWeight="500">
              {electionYear} Election
            </Heading>
            <Text pt="10px" fontSize="14px">
              Election starts on the 25th of March, 8:00am
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

        <Candidates position="President" />
        <Candidates position="Vice-President" />
      </Box>
      <CreatePoll isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </ElectionDetail>
  );
}

export default Polls;
