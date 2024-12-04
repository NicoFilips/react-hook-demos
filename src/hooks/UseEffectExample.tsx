import React, { useState, useEffect } from "react";
import { Text, Button, VStack } from "@chakra-ui/react";

const UseEffectExample: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <VStack>
      <Text fontSize="xl">Timer: {seconds} Sekunden</Text>
      <Button colorScheme="blue" onClick={() => setSeconds(0)}>
        Zurücksetzen
      </Button>
    </VStack>
  );
};

export default UseEffectExample;
