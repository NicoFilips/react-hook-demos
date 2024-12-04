import React, { useState } from "react";
import { Stack, StackSeparator, Text, Button, Box } from "@chakra-ui/react";

const UseStateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

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
      <Text fontSize="xl" fontWeight="bold">
        useState Example
      </Text>
      <Box>
        <Button colorScheme="teal" onClick={() => setCount(count + 1)} mr={2}>
          Erhöhen
        </Button>
        <Button colorScheme="orange" onClick={() => setCount(count - 1)} mr={2}>
          Verringern
        </Button>
        <Button colorScheme="red" onClick={() => setCount(0)}>
          Zurücksetzen
        </Button>
      </Box>
    </Stack>
  );
};

export default UseStateExample;
