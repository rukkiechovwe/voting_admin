import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/nav";
import Router from "./router";
import { theme } from "./theme";
import { TOKEN } from "./utils/constants";
import AdminContextProvider from "./context/adminContext";
import ElectionContextProvider from "./context/electionContext";

function App() {
  const [hasToken, setHasToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN);
    if (savedToken) {
      setHasToken(true);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <ElectionContextProvider>
      <AdminContextProvider>
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
      </AdminContextProvider>
    </ElectionContextProvider>
  );
}

export default App;
