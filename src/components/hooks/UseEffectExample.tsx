import React, { useState, useEffect } from "react";
import { Text, Button, Stack, StackSeparator } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

const UseEffectExample: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <Stack
      separator={<StackSeparator />}
      p={4}
      margin={4}
      border="2px solid"
      borderColor="black"
      borderRadius="md"
      boxShadow="md"
      bg="rgba(128, 0, 128, 0.4)"
      transition="all 0.3s ease-in-out"
      _hover={{
        borderColor: "purple.300",
        bg: "rgba(128, 0, 128, 0.6)",
        transform: "scale(1.02)",
      }}
    >
      <Tooltip content="React useEffect Hook">
        <Text fontSize="xl" fontWeight="bold">
          useEffect Beispiel
        </Text>
      </Tooltip>

      <Text fontSize="xl">Timer: {seconds} Sekunden</Text>
      <Button colorScheme="blue" onClick={() => setSeconds(0)}>
        Zurücksetzen
      </Button>
    </Stack>
  );
};

export default UseEffectExample;
