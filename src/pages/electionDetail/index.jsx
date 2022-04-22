import React from "react";
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

function ElectionDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 200px)",
        },
      }}
    >
      <TopHeader />
      <Box p="20px">
        <Flex mb="16px" justifyContent="space-between">
          <Box>
            <Heading fontSize="28px" fontWeight="500">
              2021 Election
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
        <Candidates position="Secretary" />
      </Box>

      <CreatePoll isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}

export default ElectionDetail;
