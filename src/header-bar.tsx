import React from "react";
import { Box, Flex, HStack, Text, Spacer } from "@chakra-ui/react";

const HeaderBar: React.FC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg="purple.900"
      color="white"
      px={4}
      py={2}
      zIndex="sticky"
    >
      <Flex alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          React Hooks Demo
        </Text>
        <Spacer />
        <HStack borderSpacing={4}></HStack>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
