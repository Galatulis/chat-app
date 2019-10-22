import React from "react";

import { cleanup, render } from "../test";
import TitleBar from "./TitleBar";

afterEach(cleanup);

describe("TitleBar", () => {
  it("renders without crashing", () => {
    render(<TitleBar />);
  });
});
