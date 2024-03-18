import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./index";

describe("Modal component", () => {
  test("renders when open", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalOverlayElement = screen.getByTestId("modal-overlay");
    expect(modalOverlayElement).toBeInTheDocument();

    const modalContainerElement = screen.getByTestId("modal-container");
    expect(modalContainerElement).toBeInTheDocument();

    const modalContentElement = screen.getByText("Modal Content");
    expect(modalContentElement).toBeInTheDocument();
  });

  test("closes when overlay is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalOverlayElement = screen.getByTestId("modal-overlay");
    fireEvent.click(modalOverlayElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
