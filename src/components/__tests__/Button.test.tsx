import { render, fireEvent } from "@testing-library/react";
import dayCalculate from "../../utils/dayCalculate";

import Button from "../Button";

jest.mock("../../utils/dayCalculate");

describe("Button.ts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should execute event handling function", () => {
    const value = "2021-12-29";
    const setResult = jest.fn();
    const { getByTestId } = render(<Button {...{ value, setResult }} />);

    fireEvent.click(getByTestId("button"), {
      preventDefault() {},
    });

    expect(setResult).toBeCalled();
    expect(dayCalculate).toBeCalledWith(value);
  });
});
