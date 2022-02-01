import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/nav";


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
      </div>
    </ChakraProvider>
  );
}

export default App;
