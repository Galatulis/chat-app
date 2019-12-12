import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";

import store from "../store";

const customRender = node => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={{}}>{node}</ThemeProvider>
    </Provider>
  );
};

export * from "@testing-library/react";

export { customRender as render, cleanup };
