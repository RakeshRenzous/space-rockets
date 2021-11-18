import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "containers/AppPage";
import Store from "store";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </Store>
  </React.StrictMode>,
  MOUNT_NODE
);
