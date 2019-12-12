import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
