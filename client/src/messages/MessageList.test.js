import React from "react";

import { cleanup, render } from "../shared/setupTest";
import MessageList from "./MessageList";

afterEach(cleanup);

describe("MessageList", () => {
  it("renders without crashing", () => {
    render(<MessageList />);
  });
});
