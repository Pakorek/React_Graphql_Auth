import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { useAppApolloClient } from "./config/apolloClient";
import { AuthGate } from "./AuthGate";

function App() {
  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthGate />
    </ApolloProvider>
  );
}

export default App;
