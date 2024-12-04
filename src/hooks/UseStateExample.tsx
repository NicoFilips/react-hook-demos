import React, { useState } from "react";
import { VStack, Text, Button, Box } from "@chakra-ui/react";

const UseStateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <VStack
      borderSpacing={4}
      p={4}
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      boxShadow="md"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Zähler: {count}
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
    </VStack>
  );
};

export default UseStateExample;
