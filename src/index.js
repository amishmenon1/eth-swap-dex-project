import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MetaMaskProvider } from "metamask-react";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <MetaMaskProvider>
    <App />
  </MetaMaskProvider>,

  document.getElementById("root")
);
registerServiceWorker();
