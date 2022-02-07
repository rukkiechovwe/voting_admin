import React, { useRef } from "react";
import TopHeader from "../../components/topHeader";
import {
  Box,
  Flex,
  Heading,
  Text,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Candidates from "../../components/candidates";
import { Plus } from "phosphor-react";
import { CreatePoll } from "../../components/createPoll";

function Election() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px="20px"
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 200px)",
        },
      }}
    >
      <TopHeader />
      <Flex justifyContent="space-between">
        <Box>
          <Heading fontSize="28px" fontWeight="500">
            2021 Election
          </Heading>
          <Text>Election starts</Text>
        </Box>
        <Box onClick={onOpen}>
          <ButtonGroup size="sm" isAttached variant="outline">
            <IconButton
              aria-label="Create Poll"
              p="10px"
              height=" 45px"
              width="45px"
              borderRadius="30px"
              icon={<Plus size={32} />}
            />
          </ButtonGroup>
        </Box>
      </Flex>
      <Candidates position="President" />
      <Candidates position="Vice-President" />
      <Candidates position="Secretary" />

      <CreatePoll isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}

export default Election;
