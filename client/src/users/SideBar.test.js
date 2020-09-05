import React from "react";

import { cleanup, render } from "../shared/setupTest";
import SideBar from "./SideBar";

afterEach(cleanup);

describe("SideBar", () => {
  it("renders without crashing", () => {
    render(<SideBar />);
  });
});
