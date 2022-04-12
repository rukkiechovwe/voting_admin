import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/nav";
import Router from "./router";
import { theme } from "./theme";
import AdminContextProvider from "./context/adminContext";

function App() {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();
  const item = localStorage.getItem("admin_id");

  useEffect(() => {
    if (item) {
      setToken(true);
    } else {
      navigate("../login");
    }
  }, [item]);

  return (
    <AdminContextProvider>
      <ChakraProvider theme={theme}>
        <Flex className="App">
          {token ? (
            <>
              <Nav />
              <Router token={token} />
            </>
          ) : (
            <Router token={token} />
          )}
        </Flex>
      </ChakraProvider>
    </AdminContextProvider>
  );
}

export default App;
