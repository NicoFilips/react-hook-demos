import React, { useState, useEffect } from "react";
import { Text, Button, VStack } from "@chakra-ui/react";

const UseEffectExample: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <VStack
      borderSpacing={4} // Korrigiert borderSpacing zu spacing
      p={4}
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      boxShadow="md"
    >
      <Text fontSize="xl">Timer: {seconds} Sekunden</Text>
      <Button colorScheme="blue" onClick={() => setSeconds(0)}>
        Zurücksetzen
      </Button>
    </VStack>
  );
};

export default UseEffectExample;
