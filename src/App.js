import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/nav";
import Router from "./router";
import { theme } from "./theme";
import { TOKEN } from "./utils/constants";
import ElectionContextProvider from "./context/electionContext";
import { AdminContext } from "./context/adminContext";

function App() {
  const { hasToken, getToken } = useContext(AdminContext);

  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN);
    if (savedToken) {
      getToken(true);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <ElectionContextProvider>
      <ChakraProvider theme={theme}>
        <Flex className="App">
          {hasToken ? (
            <>
              <Nav />
              <Router hasToken={hasToken} />
            </>
          ) : (
            <Router hasToken={hasToken} />
          )}
        </Flex>
      </ChakraProvider>
    </ElectionContextProvider>
  );
}

export default App;
