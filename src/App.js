import { ChakraProvider } from "@chakra-ui/react";
// import Nav from "./components/nav";
import Home from "./pages/home";


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <Nav /> */}
        <Home/>
        
      </div>
    </ChakraProvider>
  );
}

export default App;
