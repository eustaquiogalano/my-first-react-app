import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Cart from "./components/ReducerCart/Cart";

function App() {
  return (
    <>
      <ChakraProvider>
        <Cart />
      </ChakraProvider>
    </>
  );
}

export default App;
