import * as React from "react";
import { create } from "react-test-renderer";
import { App } from "..";

it("renders correctly", () => {
  const app = create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
