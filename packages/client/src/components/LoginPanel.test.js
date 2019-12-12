import React from "react";

import { cleanup, render } from "../test";
import LoginPanel from "./LoginPanel";

afterEach(cleanup);

describe("LoginPanel", () => {
  it("renders without crashing", () => {
    render(<LoginPanel />);
  });
});
