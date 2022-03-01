import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Box,
  Text,
  Link,
  Flex,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Plus } from "phosphor-react";
import { Link as RL } from "react-router-dom";
import TableHead from "../../common/tableHead";
import { CreateAdmin } from "../createAdmin";

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="brand.white"
      color="brand.black"
      borderRadius="10px"
      mb="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
    >
      <Flex
        w="100%"
        p="20px"
        borderBottom="1px solid"
        borderColor="brand.borderColor"
        justify="space-between"
        align="center"
      >
        <Text fontSize="1.1rem" color="Background.black">
          Manage Admin
        </Text>
        <ButtonGroup size="sm" isAttached variant="outline" onClick={onOpen}>
          <IconButton
            aria-label="Create Poll"
            p="8px"
            height=" 35px"
            width="35px"
            borderRadius="20px"
            bg="brand.primary"
            color="brand.white"
            border="none"
            icon={<Plus size={50} weight="bold" />}
          />
        </ButtonGroup>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHead text="Name" />
            <TableHead text="email" />
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            _hover={{
              background: " #c8c8c824",
              borderRadius: "10px",
              transition: "200ms all ease",
            }}
          >
            <Link
              as={RL}
              color="#4f4f4f"
              width=" 100%"
              display=" contents"
              to="/"
            >
              <Td borderBottom="none">Emily Rose</Td>
              <Td borderBottom="none">admin@gmail.com</Td>
            </Link>
          </Tr>
        </Tbody>
      </Table>

      <CreateAdmin isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Admin;
