import { useContext } from "react";
import { Box, List, ListItem, Link, Flex } from "@chakra-ui/react";
import { NavLink as RL } from "react-router-dom";
import { ElectionContext } from "../../context/electionContext";

const SubNav = () => {
  const { electionYear } = useContext(ElectionContext);

  const NavListItem = ({ to, name }) => {
    return (
      <ListItem>
        <Link
          as={RL}
          to={to}
          _hover={{
            transition: "200ms all ease",
            color: "brand.white",
            borderColor: "brand.white",
          }}
          mr="48px"
          py="18px"
          color="brand.white"
          display="block"
          borderBottom="4px solid transparent"
          className="sub-nav"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span> {name}</span>
          </div>
        </Link>
      </ListItem>
    );
  };
  return (
    <Box w="100%" bg="#7d3cffbf" px="20px">
      <List h="100%">
        <Flex>
          <NavListItem
            to={`/elections/${electionYear}/overview`}
            name="Overview"
          />
          <NavListItem
            to={`/elections/${electionYear}/students`}
            name="Students"
          />
          <NavListItem to={`/elections/${electionYear}/polls`} name="Polls" />
        </Flex>
      </List>
    </Box>
  );
};

export default SubNav;
