import { render, screen } from "@testing-library/react";
import { Product } from "../../types";
import ProductCard from "./index"; // Asumiendo que ProductCard está en el mismo directorio

// Mock de la función useDispatch
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

// Mock de la función useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ProductCard component", () => {
  test("renders product cards correctly", () => {
    const productList: Product[] = [
      {
        id: "1",
        brand: "Brand 1",
        category: "Category 1",
        image: "image-url-1",
        name: "Product 1",
        price: 100,
        discount: 10,
        hasDiscount: true,
      },
      {
        id: "2",
        brand: "Brand 2",
        category: "Category 2",
        image: "image-url-2",
        name: "Product 2",
        price: 200,
        discount: undefined,
        hasDiscount: false,
      },
    ];

    render(<ProductCard productList={productList} />);

    productList.forEach((product) => {
      const productCard = screen.getByText(product.name);
      expect(productCard).toBeInTheDocument();
    });
  });
});
