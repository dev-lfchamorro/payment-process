import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "./index";

describe("Icon component", () => {
  test("renders with required props", () => {
    render(<Icon pathIcon="/path/to/icon.png" size={24} />);

    const iconImage = screen.getByAltText("Icon");
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute("src", "/path/to/icon.png");
    expect(iconImage).toHaveAttribute("height", "24");
    expect(iconImage).toHaveAttribute("width", "24");
  });

  test("renders with optional text", () => {
    render(<Icon pathIcon="/path/to/icon.png" size={24} text="Example" />);

    const iconText = screen.getByText("Example");
    expect(iconText).toBeInTheDocument();
  });

  test("renders with optional className", () => {
    render(
      <Icon pathIcon="/path/to/icon.png" size={24} className="custom-class" />
    );

    const iconContainer = screen.getByTestId("icon-container");
    expect(iconContainer).toHaveClass("custom-class");
  });

  test("renders with brightness filter", () => {
    render(<Icon pathIcon="/path/to/icon.png" size={24} brightness={1} />);

    const iconImage = screen.getByAltText("Icon");
    expect(iconImage).toHaveStyle("filter: brightness(1) invert(0)");
  });

  test("executes onClick callback", () => {
    const onClickMock = jest.fn();
    render(
      <Icon pathIcon="/path/to/icon.png" size={24} onClick={onClickMock} />
    );

    const iconContainer = screen.getByTestId("icon-container");
    iconContainer.click();
    expect(onClickMock).toHaveBeenCalled();
  });
});
