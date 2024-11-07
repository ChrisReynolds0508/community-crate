import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Import ChakraProvider

import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
})



function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider value={system}> 
        <StoreProvider>
          <Nav />
          <Box bg="tomato" w="100%" p={4} color="white">
            This is a Box component from Chakra UI
          </Box>
          <Outlet />
        </StoreProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;