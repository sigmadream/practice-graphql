import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Box, ChakraProvider, Text, theme } from "@chakra-ui/react";
import { BrowserRouter, Route } from 'react-router-dom';
import * as React from "react";
import FilmList from "./components/film/FilmList";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <FilmList />
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
};
