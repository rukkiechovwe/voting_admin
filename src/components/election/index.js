import { useContext } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RL } from "react-router-dom";

import ElectionCard from "../../common/electionCard";
import { ElectionContext } from "../../context/electionContext";
import { Spinner } from "../../common/Spinner";

const Election = () => {
  const { elections, loading } = useContext(ElectionContext);

  return (
    <Box mb="2rem" p="20px">
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <Spinner background="transparent" height="calc(100vh - 290px)" />
        ) : elections.length !== 0 ? (
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
      </Flex>
    </Box>
  );
};

export default Election;
