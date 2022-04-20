import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/nav";
import Router from "./router";
import { theme } from "./theme";
import AdminContextProvider from "./context/adminContext";
import { TOKEN } from "./utils/constants";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
}

export default App;
