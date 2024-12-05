import React from "react";
import "./App.css"; // Globale Styles
import {
  ChakraProvider,
  SimpleGrid,
  Box,
  defaultSystem,
} from "@chakra-ui/react";
import UseEffectExample from "./components/hooks/UseEffectExample";
import UseStateExample from "./components/hooks/UseStateExample";
import UseRefExample from "./components/hooks/UseRefExample";
import UseMemoExample from "./components/hooks/UseMemoExample";
import HeaderBar from "./components/header-bar";
import UseReducerExample from "./components/hooks/UseReducerExample";
import { ColorModeButton, ColorModeProvider } from "./components/ui/color-mode";

const App: React.FC = () => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider />
    <HeaderBar />
    {/* Dynamisches Grid für die Beispiel-Komponenten */}
    <SimpleGrid
      columns={[1, 2, 3]} // Responsives Layout: 1 Spalte mobil, 2 mittel, 3 groß
      margin={4} // Abstand zwischen den Komponenten
      p={4} // Padding um das Grid herum
    >
      <Box>
        <UseStateExample />
      </Box>
      <Box>
        <UseEffectExample />
      </Box>
      <Box>
        <UseRefExample />
      </Box>
      <Box>
        <UseMemoExample />
      </Box>
      <Box>
        <UseReducerExample />
      </Box>
    </SimpleGrid>
  </ChakraProvider>
);

export default App;
