import * as React from "react";
import { create } from "react-test-renderer";
import Hello from "../";

it("renders correctly with defaults", () => {
  const button = create(<Hello name="World" enthusiasmLevel={1} />).toJSON();
  expect(button).toMatchSnapshot();
});
