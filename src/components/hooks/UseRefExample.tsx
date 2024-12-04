import React, { useRef } from "react";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";

const UseRefExample: React.FC = () => {
  // Ref erstellen, um auf das Input-Element zuzugreifen
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus(); // Setzt den Fokus auf das Input-Feld
  };

  return (
    <VStack
      borderSpacing={4}
      p={4}
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold">
        useRef Beispiel: Fokus auf das Eingabefeld
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
    </VStack>
  );
};

export default UseRefExample;
