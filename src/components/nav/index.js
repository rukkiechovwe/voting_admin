import {
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import {
  HouseSimple,
  UsersThree,
  Users,
  Ticket,
  GearSix,
  Power,
} from "phosphor-react";
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
          {/* <ListIcon
            w="20px"
            h="20px"
            as={icon}
          /> */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {icon}
            {name}
          </span>
        </Link>
      </ListItem>
    );
  };
  return (
    <Box
      w="120px"
      minH="100vh"
      bg="brand.primary"
      sx={{
        display: "none",
        "@media screen and (min-width: 880px)": {
          display: "block",
        },
      }}
    >
      <Box position="fixed" top={0} left={0} width="120px">
        <Box h="90px" p="28px">
          <Heading
            as="h2"
            fontSize="1rem"
            textAlign="center"
            color="brand.white"
          >
            NACOS
          </Heading>
        </Box>
        <Box pt="20px" pb="50px" h="85%">
          <Box pb="80px">
            <List>
              <NavListItem
                to="/"
                icon={<HouseSimple size={20} weight="bold" />}
                name="Home"
              />
              {/* <NavListItem to="/students" icon={UsersThree} name="Students" /> */}
              {/* <NavListItem to="/elections" icon={Ticket} name="Election" /> */}
              <NavListItem
                to="/admin"
                icon={<Users size={20} weight="bold" />}
                name=" Admins"
              />
              <NavListItem
                to="/account"
                icon={<GearSix size={20} weight="bold" />}
                name=" Account"
              />
              <NavListItem
                to="/"
                icon={<Power size={20} weight="bold" />}
                name=" Logout"
              />
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
