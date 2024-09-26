import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createApolloClient } from "./apollo/createApolloClient";
import Film from './pages/Film';
import Main from './pages/Main';

const apolloClient = createApolloClient();

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/film/:filmId" element={<Film/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
};
