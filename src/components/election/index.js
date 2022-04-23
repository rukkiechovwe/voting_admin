import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RL, Outlet } from "react-router-dom";

import ElectionCard from "../../common/electionCard";

const Election = () => {
  return (
    <Box mb="2rem">
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Link
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
          to="/elections/2022"
        >
          <ElectionCard
            year="2022"
            startDate="23/04/2022"
            startTime="09:00 AM"
            endDate="23/04/22"
            endTime="16:00 PM"
            minimumLevel="200"
          />
        </Link>
        <Link
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
          to="/elections/2022"
        >
          <ElectionCard
            year="2021"
            startDate="23/04/2021"
            startTime="09:00 AM"
            endDate="23/04/21"
            endTime="16:00 PM"
            minimumLevel="200"
            link="/elections/2022"
          />
        </Link>
        <Link
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
          to="/elections/2022"
        >
          <ElectionCard
            year="2020"
            startDate="23/04/2020"
            startTime="09:00 AM"
            endDate="23/04/20"
            endTime="16:00 PM"
            minimumLevel="200"
            link="/elections/2022"
          />
        </Link>
        <Link
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
          to="/elections/2022"
        >
          <ElectionCard
            year="2019"
            startDate="23/04/2022"
            startTime="09:00 AM"
            endDate="23/04/22"
            endTime="16:00 PM"
            minimumLevel="200"
            link="/elections/2022"
          />
        </Link>
        <Link
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
          to="/elections/2022"
        >
          <ElectionCard
            year="2018"
            startDate="23/04/2022"
            startTime="09:00 AM"
            endDate="23/04/22"
            endTime="16:00 PM"
            minimumLevel="200"
            link="/elections/2022"
          />
        </Link>

        <Outlet />
      </Flex>
    </Box>
  );
};

export default Election;
