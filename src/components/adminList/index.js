import { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Box,
  Text,
  Flex,
  Switch,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Plus } from "phosphor-react";
// import { Link as RL } from "react-router-dom";
import TableHead from "../../common/tableHead";
import { CreateAdmin } from "../createAdmin";
import { AdminContext } from "../../context/adminContext";

const Admin = () => {
  const { adminList } = useContext(AdminContext);
  //   console.log(adminList);
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
        <Text fontSize="1.2rem" as="h5" color="Background.black">
          Manage Sub Administrators
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
            <TableHead text="eligible" />
          </Tr>
        </Thead>
        <Tbody>
          {adminList ? (
            adminList.map(
              (admin) =>
                admin.role === 2 && (
                  <Tr
                    _hover={{
                      background: " #c8c8c824",
                      borderRadius: "10px",
                      transition: "200ms all ease",
                    }}
                    key={admin.id}
                  >
                    <Td>{admin.name}</Td>
                    <Td>{admin.email}</Td>
                    <Td>
                      <Switch id="activate-admin" isChecked={admin.active} />
                    </Td>
                  </Tr>
                )
            )
          ) : (
            <Tr>
              <Td borderBottom="none">No Admin has been created yet</Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      <CreateAdmin isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Admin;
