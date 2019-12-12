import React from "react";

import { cleanup, render } from "../test";
import MessageInput from "./MessageInput";

afterEach(cleanup);

describe("MessageInput", () => {
  it("renders without crashing", () => {
    render(<MessageInput />);
  });
});
