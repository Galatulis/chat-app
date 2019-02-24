import React from "react";

import { cleanup, render } from "../test";
import LoginPanel from "./LoginPanel";

afterEach(cleanup);

describe("LoginPanel", () => {
	it("renders without crashing", () => {
		const logIn = jest.fn();

		render(<LoginPanel logIn={logIn} />);
	});
});
