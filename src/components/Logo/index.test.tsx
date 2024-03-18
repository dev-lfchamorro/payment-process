import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Logo component", () => {
  test("renders with default primary and secondary text", () => {
    const slogan = "Paga fácil";
    render(
      <BrowserRouter>
        <Logo slogan={slogan} />
      </BrowserRouter>
    );

    const primaryTextElement = screen.getByText("Pago");
    expect(primaryTextElement).toBeInTheDocument();

    const secondaryTextElement = screen.getByText("LC");
    expect(secondaryTextElement).toBeInTheDocument();

    const sloganElement = screen.getByText(slogan);
    expect(sloganElement).toBeInTheDocument();
  });

  test("renders with custom primary and secondary text", () => {
    const primaryText = "Pago";
    const secondaryText = "LC";
    const slogan = "Paga fácil";
    render(
      <BrowserRouter>
        <Logo
          primaryText={primaryText}
          secondaryText={secondaryText}
          slogan={slogan}
        />
      </BrowserRouter>
    );

    const primaryTextElement = screen.getByText(primaryText);
    expect(primaryTextElement).toBeInTheDocument();

    const secondaryTextElement = screen.getByText(secondaryText);
    expect(secondaryTextElement).toBeInTheDocument();

    const sloganElement = screen.getByText(slogan);
    expect(sloganElement).toBeInTheDocument();
  });
});
