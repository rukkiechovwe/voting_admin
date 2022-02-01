import { Box, List, ListItem, ListIcon, Text, Heading } from "@chakra-ui/react";
import { HouseSimple, UsersThree, Ticket } from "phosphor-react";
const Nav = () => {
  return (
    <Box w="250px" h="100vh" bg="#F2F2F2">
      <Box bg="#828282" h="90px" p="24px">
        <Heading as="h1" textAlign="center" color="#A7A7A7">
          LOGO
        </Heading>
      </Box>
      <Box py="50px" px="24px" h="85%">
        <Box pb="80px">
          <Text pb="25px" fontSize="14px" color="#828282">
            MENU
          </Text>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={HouseSimple} />
              Dashboard
            </ListItem>
            <ListItem>
              <ListIcon as={UsersThree} />
              Students
            </ListItem>
            <ListItem>
              <ListIcon as={Ticket} />
              Candidates
            </ListItem>
            <ListItem>
              <ListIcon />
              Create Polls
            </ListItem>
          </List>
        </Box>
        <Box pb="20px">
          <Text pb="25px" fontSize="14px" color="#828282">
            OTHERS
          </Text>
          <List spacing={5}>
            <ListItem>
              <ListIcon />
              Account Settings
            </ListItem>
            <ListItem>
              <ListIcon />
              Help & Support
            </ListItem>
            <ListItem>
              <ListIcon />
              Logout
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
