import { render, screen } from "@testing-library/react";
import CoverContent from "./idex";

describe("CoverContent component", () => {
  test("renders with background image", () => {
    const bgImg = "example-bg-image.jpg";
    render(<CoverContent bgImg={bgImg} />);

    const imageContainer = screen.getByTestId("image");
    expect(imageContainer).toBeInTheDocument();

    const coverBgImage = screen.getByTestId("cover-bg-image");
    expect(coverBgImage).toHaveStyle(`backgroundImage: url(${bgImg})`);
  });

  test("renders with children", () => {
    render(
      <CoverContent bgImg="example-bg-image.jpg">
        <div data-testid="child-element">Child Element</div>
      </CoverContent>
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });
});
