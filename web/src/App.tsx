import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Box, ChakraProvider, Text, theme } from "@chakra-ui/react";
import * as React from "react";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box>
        <Text>Ghibli GraphQL</Text>
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
