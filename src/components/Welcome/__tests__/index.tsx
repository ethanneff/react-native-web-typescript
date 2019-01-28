import * as React from "react";
import { create } from "react-test-renderer";
import { State, Welcome } from "..";

describe("Welcome", () => {
  it("renders correctly with defaults", () => {
    const button = create(
      <Welcome name="World" enthusiasmLevel={1} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  it("increments", () => {
    const button: any = create(
      <Welcome name="World" enthusiasmLevel={1} />
    ).getInstance();
    button.onIncrement();
    button.onIncrement();
    const state: State = button.state;
    expect(state.enthusiasmLevel).toBe(3);
  });

  it("decrements", () => {
    const button: any = create(
      <Welcome name="World" enthusiasmLevel={4} />
    ).getInstance();
    button.onDecrement();
    button.onDecrement();
    const state: State = button.state;
    expect(state.enthusiasmLevel).toBe(2);
  });

  it("decrements at zero", () => {
    const button: any = create(
      <Welcome name="World" enthusiasmLevel={0} />
    ).getInstance();
    button.onDecrement();
    const state: State = button.state;
    expect(state.enthusiasmLevel).toBe(0);
  });
});
