import "react-native";
import React from "react";
import { Main } from "..";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<Main />);
});
