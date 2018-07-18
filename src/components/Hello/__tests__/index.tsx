import * as React from "react";
import { create } from "react-test-renderer";
import Hello from "../";

describe("Hello", () => {
  it("renders correctly with defaults", () => {
    const button = create(<Hello name="World" enthusiasmLevel={1} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it("increments", () => {
    const button = create(
      <Hello name="World" enthusiasmLevel={1} />
    ).getInstance();
    button.onIncrement();
    button.onIncrement();
    expect(button.state.enthusiasmLevel).toBe(3);
  });

  it("decrements", () => {
    const button = create(
      <Hello name="World" enthusiasmLevel={4} />
    ).getInstance();
    button.onDecrement();
    button.onDecrement();
    expect(button.state.enthusiasmLevel).toBe(2);
  });

  it("decrements at zero", () => {
    const button = create(
      <Hello name="World" enthusiasmLevel={0} />
    ).getInstance();
    button.onDecrement();
    expect(button.state.enthusiasmLevel).toBe(0);
  });
});
