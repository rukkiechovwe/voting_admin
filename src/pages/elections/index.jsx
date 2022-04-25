import React from "react";
import { Box, Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Election from "../../components/election";
import MainPage from "../../components/mainPage";

import { Plus } from "phosphor-react";
import { CreateElection } from "../../components/createElection";

function Elections() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MainPage>
      <Box>
        <Heading fontSize="28px" fontWeight="500" p="20px 20px 16px 20px">
          Elections
        </Heading>
        <Election />
        <Flex justifyContent="center" pb="20px">
          <Button
            onClick={onOpen}
            aria-label="Create Poll"
            p="5px"
            height=" 45px"
            width="200px"
            bg="brand.primary"
            color="brand.white"
            border="none"
            boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
            rightIcon={<Plus size={20} weight="bold" />}
          >
            Add Election
          </Button>
        </Flex>
      </Box>

      <CreateElection isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </MainPage>
  );
}

export default Elections;
