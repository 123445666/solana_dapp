import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { WalletKitProvider } from "@gokiprotocol/walletkit";

import App from "./App";
import { store } from "./store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <WalletKitProvider
        defaultNetwork="devnet"
        app={{
          name: "My App"
        }}
      >
        <App />
      </WalletKitProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);