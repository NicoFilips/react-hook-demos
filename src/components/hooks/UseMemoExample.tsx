import React, { useState, useMemo } from "react";
import { Stack, Input, Button, Text, StackSeparator } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  // Teure Berechnung, die nur ausgeführt wird, wenn sich `number` oder `multiplier` ändern
  const expensiveCalculation = useMemo(() => {
    console.log("Teure Berechnung läuft...");
    return number * multiplier;
  }, [number, multiplier]);

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
      <Tooltip content="React useMemo Hook">
        <Text fontSize="xl" fontWeight="bold">
          useMemo Beispiel
        </Text>
      </Tooltip>

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
    </Stack>
  );
};

export default UseMemoExample;
