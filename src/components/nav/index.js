import { Box, List, ListItem, ListIcon, Text, Heading } from "@chakra-ui/react";
import { HouseSimple, UsersThree, Ticket } from "phosphor-react";
import { Link } from "react-router-dom";
const Nav = () => {
  const NavListItem = ({ to, name, icon }) => {
    return (
      <ListItem>
        <Link to={to} color="brand.white">
          <ListIcon
            w="24px"
            h="24px"
            mr="20px"
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
      <Box bg="brand.white" h="90px" p="28px">
        <Heading as="h2" fontSize="1.8rem" textAlign="center" color="brand.primary">
          NACOSS
        </Heading>
      </Box>
      <Box py="50px" px="24px" h="85%">
        <Box pb="80px">
          <Text color="brand.white" pb="25px" fontSize="14px" >
            MENU
          </Text>
          <List spacing={6}>
            <NavListItem to="/" icon={HouseSimple} name="Dashboard" />
            <NavListItem to="/students" icon={UsersThree} name="Students" />
            <NavListItem to="/election" icon={Ticket} name="Election" />
          </List>
        </Box>
        <Box pb="20px">
          <Text color="brand.white" pb="25px" fontSize="14px" >
            OTHERS
          </Text>
          <List spacing={6}>
            <NavListItem to="/account" name=" AccountSettings" />
            <NavListItem to="/" name=" Help & Support" />{" "}
            <NavListItem to="/" name=" Logout" />
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
