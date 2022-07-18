import {
  Box,
  List,
  ListItem,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";
import {
  HouseSimple,
  Users,
  GearSix,
  Power,
} from "phosphor-react";
import { NavLink as RL, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();

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
          className="nav-link"
        >
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
            </List>
            <Button
              px="24px"
              py="18px"
              color="brand.white"
              display="flex"
              flexDirection="column"
              fontWeight="400"
              background="transparent"
              height="100%"
              width="100%"
              alignItems="center"
              borderRadius="0"
              _hover={{
                bg: "#fff !important",
                color: "#FF0000 !important",
                transition: "200ms all ease",
              }}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <Power size={20} weight="bold" />
              <span>Logout</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
