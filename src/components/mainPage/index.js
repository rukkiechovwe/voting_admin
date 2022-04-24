import TopHeader from "../../components/topHeader";
import { Box } from "@chakra-ui/react";

function MainPage({ children }) {
  return (
    <Box
      position="relative"
      sx={{
        width: "100% ",
        "@media screen and (min-width: 880px)": {
          width: "calc(100% - 120px)",
        },
      }}
    >
      <TopHeader />
      {children}
    </Box>
  );
}

export default MainPage;
