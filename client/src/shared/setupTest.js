import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { render, cleanup } from "@testing-library/react";

import store from "./store";
import { SocketProvider } from "./socket";

const customRender = node => {
  return render(
    <StoreProvider store={store}>
      <SocketProvider uri="">{node}</SocketProvider>
    </StoreProvider>
  );
};

export * from "@testing-library/react";

export { customRender as render, cleanup };
