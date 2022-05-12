import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

const CandidateCard = ({ name, image, votes }) => {
  return (
    <Flex
      bg="brand.white"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      borderRadius="10px"
      m="8px"
      p="20px"
      sx={{
        ":last-child": {
          marginRight: 0,
        },
        //   width: "47.7%",
        //   "@media screen and (min-width: 960px)": {
        //     width: "100%",
        //   },
        width: "100%",
        "@media screen and (min-width: 600px)": {
          width: "47.1%",
        },
        "@media screen and (min-width: 635px)": {
          width: "47.3%",
        },
        "@media screen and (min-width: 680px)": {
          width: "47.5%",
        },
        "@media screen and (min-width: 740px)": {
          width: "47.7%",
        },
        "@media screen and (min-width: 800px)": {
          width: "31.2%",
        },
        "@media screen and (min-width: 870px)": {
          width: "31.1%",
        },
        "@media screen and (min-width: 1024px)": {
          width: "31.5%",
        },
      }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          width: "calc(100% - 90px)",
        }}
        mr="20px"
      >
        <Heading fontSize="20px" fontWeight="500">
          {name}
        </Heading>
        <Text
          rounded="md"
          fontSize="14px"
          bg="brand.primary"
          color="brand.white"
          mt="25px"
          py="5px"
          px="15px"
        >
          {votes} Votes
        </Text>
      </Flex>
      {image ? (
        <Img src={image} borderRadius="full" h="70px" w="70px" />
      ) : (
        <Box borderRadius="full" h="70px" w="70px" bg="#E0E0E0"></Box>
      )}
    </Flex>
  );
};

export default CandidateCard;
