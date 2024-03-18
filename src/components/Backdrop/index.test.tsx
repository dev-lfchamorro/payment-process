import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Backdrop from "./index";

describe("Backdrop Component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <Router>
          <Backdrop />
        </Router>
      </Provider>
    );
  });

  it("renders the backdrop title correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <Backdrop />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Resumen de la compra")).toBeInTheDocument();
  });

  it("renders the confirm payment button when loader is false", () => {
    render(
      <Provider store={store}>
        <Router>
          <Backdrop />
        </Router>
      </Provider>
    );
    expect(screen.getByText("CONFIRMAR PAGO")).toBeInTheDocument();
  });
});
