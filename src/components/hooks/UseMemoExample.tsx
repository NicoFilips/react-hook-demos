import React, { useState, useMemo } from "react";
import { VStack, Input, Button, Text } from "@chakra-ui/react";

const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  // Teure Berechnung, die nur ausgeführt wird, wenn sich `number` oder `multiplier` ändern
  const expensiveCalculation = useMemo(() => {
    console.log("Teure Berechnung läuft...");
    return number * multiplier;
  }, [number, multiplier]);

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
        useMemo Beispiel
      </Text>

      <Input
        type="number"
        placeholder="Gib eine Zahl ein"
        onChange={(e) => setNumber(Number(e.target.value))}
        size="md"
      />

      <Input
        type="number"
        placeholder="Faktor ändern"
        onChange={(e) => setMultiplier(Number(e.target.value))}
        size="md"
      />

      <Text fontSize="lg" color="teal">
        Ergebnis: {expensiveCalculation}
      </Text>

      <Button colorScheme="blue" onClick={() => setNumber(0)}>
        Zahl zurücksetzen
      </Button>
    </VStack>
  );
};

export default UseMemoExample;
