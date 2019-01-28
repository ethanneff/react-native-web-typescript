import * as React from "react";
import { create } from "react-test-renderer";
import { Instructions } from "..";

describe("Instructions", () => {
  it("renders correctly with defaults", () => {
    const button = create(<Instructions instructions="123" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
