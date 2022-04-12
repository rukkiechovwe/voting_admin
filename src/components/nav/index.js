import {
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { HouseSimple, UsersThree, Users, Ticket } from "phosphor-react";
import { Link as RL } from "react-router-dom";
const Nav = () => {
  const NavListItem = ({ to, name, icon }) => {
    return (
      <ListItem>
        <Link
          as={RL}
          to={to}
          _hover={{
            bg: "brand.white",
            color: "brand.primary",
            transition: "200ms all ease",
          }}
          px="24px"
          py="18px"
          color="brand.white"
          display="block"
        >
          <ListIcon
            w="20px"
            h="20px"
            mr="15px"
            verticalAlign="middle"
            as={icon}
          />
          {name}
        </Link>
      </ListItem>
    );
  };
  return (
    <Box
      w="220px"
      minH="100vh"
      bg="brand.primary"
      sx={{
        display: "none",
        "@media screen and (min-width: 880px)": {
          display: "block",
        },
      }}
    >
      <Box position="fixed" top={0} left={0} width="220px">
        <Box h="90px" p="28px">
          <Heading
            as="h2"
            fontSize="1.8rem"
            textAlign="center"
            color="brand.white"
          >
            NACOSS
          </Heading>
        </Box>
        <Box pt="20px" pb="50px" h="85%">
          <Box pb="80px">
            <Text color="brand.white" pb="25px" fontSize="14px" px="24px">
              MENU
            </Text>
            <List>
              <NavListItem to="/" icon={HouseSimple} name="Dashboard" />
              <NavListItem to="/students" icon={UsersThree} name="Students" />
              <NavListItem to="/election" icon={Ticket} name="Election" />
              <NavListItem to="/admin" icon={Users} name=" Admins" />
            </List>
          </Box>
          <Box pb="20px">
            <Text color="brand.white" pb="25px" fontSize="14px" px="24px">
              OTHERS
            </Text>
            <List>
              <NavListItem to="/account" name=" Account" />
              <NavListItem to="/" name=" Logout" />
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
