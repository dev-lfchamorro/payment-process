import React from "react";
import { render, screen } from "@testing-library/react";
import ListItemText from "./index";

describe("ListItemText component", () => {
  const itemList = [
    { title: "Item 1", value: "10", discount: 20 },
    { title: "Item 2", value: "20", discount: 0 },
  ];

  test("renders with custom className", () => {
    render(
      <ListItemText
        title="Title"
        itemList={itemList}
        className="custom-class"
      />
    );

    const listItemTextContainer = screen.getByTestId(
      "list-item-text-container"
    );
    expect(listItemTextContainer).toHaveClass("custom-class");
  });
});
