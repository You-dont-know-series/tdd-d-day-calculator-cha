import { render, fireEvent } from "@testing-library/react";

import Input from "../Input";

describe("Input.ts", () => {
  it("should execute event handling function", () => {
    const value = "2021-12-29";
    const onChange = jest.fn();
    const { getByTestId } = render(<Input {...{ value, onChange }} />);

    fireEvent.change(getByTestId("input"), {
      preventDefault() {},
      target: { value: "2021-12-30" },
    });

    expect(onChange).toBeCalled();
  });

  it("should be a valid value", () => {
    const value = "2021-12-29";
    const onChange = jest.fn();
    const { getByTestId } = render(<Input {...{ value, onChange }} />);

    expect(getByTestId("input").getAttribute("value")).toBe(value);
  });
});
