import { render, screen } from "@testing-library/react";
import RedirectionList from "./index";

describe("RedirectionList component", () => {
  test("renders redirection list correctly", () => {
    const title = "Test Redirections";
    const redirects = [
      {
        text: "Google",
        redirectUrl: "https://www.google.com",
      },
      {
        text: "GitHub",
        redirectUrl: "https://www.github.com",
      },
    ];

    render(<RedirectionList title={title} redirects={redirects} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    redirects.forEach((redirect) => {
      const redirectElement = screen.getByText(redirect.text);

      expect(redirectElement).toBeInTheDocument();
      expect(redirectElement).toHaveAttribute("href", redirect.redirectUrl);
    });
  });
});
