import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import UseEffectExample from "./hooks/UseEffectExample";
import UseStateExample from "./hooks/UseStateExample";

const App: React.FC = () => (
  <ChakraProvider value={defaultSystem}>
    <UseStateExample />
    <UseEffectExample />
  </ChakraProvider>
);

export default App;
