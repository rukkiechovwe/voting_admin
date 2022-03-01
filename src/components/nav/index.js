import {
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { HouseSimple, UsersThree,Users, Ticket } from "phosphor-react";
import { Link as RL } from "react-router-dom";
const Nav = () => {
  const NavListItem = ({ to, name, icon }) => {
    return (
      <ListItem>
        <Link
          as={RL}
          to={to}
          _hover={{
            bg: "brand.primary",
            padding: "13px 20px",
            margin: "10px 0",
            borderRadius: "5px",
            color: "brand.white",
            transition: "200ms all ease",
          }}
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
      bg="brand.white"
      sx={{
        display: "none",
        "@media screen and (min-width: 880px)": {
          display: "block",
        },
      }}
    >
      <Box bg="brand.white" h="90px" p="28px">
        <Heading
          as="h2"
          fontSize="1.8rem"
          textAlign="center"
          color="brand.primary"
        >
          NACOSS
        </Heading>
      </Box>
      <Box pt="20px" pb="50px" px="24px" h="85%">
        <Box pb="80px">
          <Text color="brand.primary" pb="25px" fontSize="14px">
            MENU
          </Text>
          <List spacing={8}>
            <NavListItem to="/" icon={HouseSimple} name="Dashboard" />
            <NavListItem to="/students" icon={UsersThree} name="Students" />
            <NavListItem to="/election" icon={Ticket} name="Election" />
            <NavListItem to="/admin" icon={Users} name=" Admins" />
          </List>
        </Box>
        <Box pb="20px">
          <Text color="brand.primary" pb="25px" fontSize="14px">
            OTHERS
          </Text>
          <List spacing={8}>
            <NavListItem to="/account" name=" Account" />
            <NavListItem to="/" name=" Logout" />
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
