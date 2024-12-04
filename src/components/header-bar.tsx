import React from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Spacer,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";

const HeaderBar: React.FC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg="purple.900"
      border="2px solid" // Starker schwarzer Rand
      borderColor="black"
      px={60}
      py={2}
      zIndex="sticky"
    >
      <Flex alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          React Hooks Demo
        </Text>
        <Spacer />
        <Spacer />

        <Link href="https://github.com/NicoFilips/react-hook-demos">
          <IconButton>
            <VscGithub />
          </IconButton>
        </Link>

        <HStack margin={4}></HStack>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
