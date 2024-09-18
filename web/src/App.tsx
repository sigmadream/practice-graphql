import { Box, ChakraProvider, Text, theme } from "@chakra-ui/react";
import * as React from "react";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Text>Ghibli GraphQL</Text>
    </Box>
  </ChakraProvider>
);
