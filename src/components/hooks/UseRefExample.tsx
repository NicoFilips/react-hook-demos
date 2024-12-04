import React, { useRef } from "react";
import {
  Stack,
  Input,
  Button,
  Box,
  Text,
  StackSeparator,
} from "@chakra-ui/react";

const UseRefExample: React.FC = () => {
  // Ref erstellen, um auf das Input-Element zuzugreifen
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus(); // Setzt den Fokus auf das Input-Feld
  };

  return (
    <Stack
      separator={<StackSeparator />}
      p={4}
      margin={4}
      border="2px solid" // Starker schwarzer Rand
      borderColor="black"
      borderRadius="md" // Runde Ecken
      boxShadow="md"
      bg="rgba(128, 0, 128, 0.4)" // Transparentes Lila
      transition="all 0.3s ease-in-out" // Übergang für Standard- und Hover-Zustand
      _hover={{
        borderColor: "purple.300", // Hellere Randfarbe beim Hover
        bg: "rgba(128, 0, 128, 0.6)", // Etwas dunklerer Hintergrund beim Hover
        transform: "scale(1.02)", // Leichtes Vergrößern beim Hover
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        useRef Beispiel
      </Text>
      <Box>
        <Input
          ref={inputRef}
          placeholder="Klicke den Button für Fokus"
          size="md"
        />
      </Box>
      <Button colorScheme="teal" onClick={handleFocus}>
        Fokus setzen
      </Button>
    </Stack>
  );
};

export default UseRefExample;
