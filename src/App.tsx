import React from "react";
import "./App.less";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/ApolloClient";
import IndexRouter from "./router/IndexRouter";

function App() {
  return (
    <ApolloProvider client={client}>
      <IndexRouter></IndexRouter>;
    </ApolloProvider>
  );
}

export default App;
