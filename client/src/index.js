import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";

import store from "./shared/store";
import { SocketProvider } from "./shared/socket";
import App from "./app/App";

ReactDOM.render(
  <StoreProvider store={store}>
    {/* eslint-disable-next-line no-undef */}
    <SocketProvider uri={process.env.SERVER_URI}>
      <App />
    </SocketProvider>
  </StoreProvider>,
  document.querySelector("#root")
);
