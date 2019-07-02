import React from "react";

import { cleanup, render } from "./test";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
