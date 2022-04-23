import React from "react";
import TopHeader from "../../components/topHeader";
import {
  Box,
  Flex,
  Heading,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import Election from "../../components/election";
import { Link as RL, Outlet } from "react-router-dom";

// import ElectionCard from "../../common/electionCard";
import { Plus } from "phosphor-react";
import { CreateElection } from "../../components/createElection";

function Elections() {
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
      <Outlet />
      <TopHeader />
      <Box p="20px">
        <Heading fontSize="28px" fontWeight="500" mb="16px">
          Elections
        </Heading>
        <Election/>
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
    </Box>
  );
}

export default Elections;
