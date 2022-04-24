import { useContext } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RL, Outlet } from "react-router-dom";

import ElectionCard from "../../common/electionCard";
import { ElectionContext } from "../../context/electionContext";

const Election = () => {
  const { elections } = useContext(ElectionContext);

  return (
    <Box mb="2rem">
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        {elections ? (
          elections.map((e, i) => (
            <Link
              key={i}
              as={RL}
              mr="15px"
              mb="15px"
              sx={{
                ":last-child": {
                  marginRight: 0,
                },
                width: "47.7%",
                "@media screen and (min-width: 960px)": {
                  width: "31.5%",
                },
              }}
              to={`/elections/${e.electionYear}/overview`}
            >
              <ElectionCard
                year={e.electionYear}
                startDate={e.startDate}
                startTime={e.startTime}
                endDate={e.endDate}
                endTime={e.endTime}
                minimumLevel={e.minimumLevel}
              />
            </Link>
          ))
        ) : (
          <Flex
            justifyContent="center"
            alignItems="end"
            width="100%"
            height="150px"
          >
            <em>No elections have been created yet</em>
          </Flex>
        )}

        <Outlet />
      </Flex>
    </Box>
  );
};

export default Election;
