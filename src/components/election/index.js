import { Box, Flex, Text } from "@chakra-ui/react";

import ElectionCard from "../../common/electionCard";

const Election = ({ position }) => {
  return (
    <Box mb="2rem">
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        <ElectionCard
          year="2022"
          startDate="23/04/2022"
          startTime="09:00 AM"
          endDate="23/04/22"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
        <ElectionCard
          year="2021"
          startDate="23/04/2021"
          startTime="09:00 AM"
          endDate="23/04/21"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
        <ElectionCard
          year="2020"
          startDate="23/04/2020"
          startTime="09:00 AM"
          endDate="23/04/20"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
        <ElectionCard
          year="2019"
          startDate="23/04/2022"
          startTime="09:00 AM"
          endDate="23/04/22"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
        <ElectionCard
          year="2018"
          startDate="23/04/2022"
          startTime="09:00 AM"
          endDate="23/04/22"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
        <ElectionCard
          year="2017"
          startDate="23/04/2022"
          startTime="09:00 AM"
          endDate="23/04/22"
          endTime="16:00 PM"
          minimumLevel="200"
          link="/election-detail"
        />
      </Flex>
    </Box>
  );
};

export default Election;
