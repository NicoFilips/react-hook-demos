import React from "react";
import "./App.css"; // Globale Styles
import { ChakraProvider, Text, defaultSystem } from "@chakra-ui/react";
import UseEffectExample from "./components/hooks/UseEffectExample";
import UseStateExample from "./components/hooks/UseStateExample";
import UseRefExample from "./components/hooks/UseRefExample";
import UseMemoExample from "./components/hooks/UseMemoExample";
import HeaderBar from "./header-bar";
import { Tooltip } from "./components/ui/tooltip";

const App: React.FC = () => (
  <ChakraProvider value={defaultSystem}>
    <HeaderBar></HeaderBar>
    <Text fontWeight="semibold">React Hooks Demo</Text>
    <Tooltip showArrow content="Tooltip-Text">
      <UseStateExample />
    </Tooltip>
    <UseEffectExample />
    <UseRefExample />
    <UseMemoExample />
  </ChakraProvider>
);

export default App;
