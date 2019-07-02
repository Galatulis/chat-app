import React from "react";
import { render } from "react-testing-library";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";

import store from "../store";

const customRender = (node: JSX.Element) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={{}}>{node}</ThemeProvider>
    </Provider>
  );
};

export * from "react-testing-library";

export { customRender as render };
