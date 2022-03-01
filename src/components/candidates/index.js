import { Box, Flex, Text } from "@chakra-ui/react";

import CandidateCard from "../../common/candidateCard";

const Candidates = ({position}) => {
  return (
    <Box
      mb="2rem"
      
    >
      <Text  py="10px" fontSize={18} fontWeight={500}>
      Position: {position}
      </Text>
      <Flex
        sx={{
          flexWrap: "wrap",
          "@media screen and (min-width: 960px)": {
            flexWrap: "nowrap",
          },
        }}
      >
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </Flex>
    </Box>
  );
};

export default Candidates;
