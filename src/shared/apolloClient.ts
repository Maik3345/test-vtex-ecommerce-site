import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", // Cambia esto a la URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});
