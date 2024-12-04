import React, { useReducer } from "react";
import { Stack, StackSeparator, Text, Button, Box } from "@chakra-ui/react";

// Typen für State und Actions
type State = { count: number };
type Action = { type: "increment" | "decrement" | "reset" };

// Reducer-Funktion
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unhandled action type");
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 }); // useReducer-Hook

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
        useReducer Example
      </Text>
      <Text>Zähler: {state.count}</Text>
      <Box>
        <Button
          margin={2}
          colorScheme="teal"
          onClick={() => dispatch({ type: "increment" })}
          mr={2}
        >
          Erhöhen
        </Button>
        <Button
          colorScheme="orange"
          onClick={() => dispatch({ type: "decrement" })}
          mr={2}
        >
          Verringern
        </Button>
        <Button
          colorScheme="red"
          onClick={() => dispatch({ type: "reset" })}
          mr={2}
        >
          Zurücksetzen
        </Button>
      </Box>
    </Stack>
  );
};

export default UseReducerExample;
