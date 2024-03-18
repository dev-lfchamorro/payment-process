import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonProps } from "./index";

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    icon: "default-icon",
    text: "Click me",
    onClick: jest.fn(),
  };

  it("renders with the correct text and icon", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    render(<Button {...defaultProps} />);

    fireEvent.click(screen.getByText("Click me"));

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("applies additional className when provided", () => {
    const { container } = render(
      <Button {...defaultProps} className="custom-class" />
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
