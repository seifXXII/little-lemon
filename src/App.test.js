import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Little Lemon app with logo", () => {
  render(<App />);
  // Check for the logo that should be on the home page
  const logoElement = screen.getByAltText(/little lemon/i);
  expect(logoElement).toBeInTheDocument();
});

test("renders home page with menu section", () => {
  render(<App />);
  // The home page should have the menu section
  const menuHeading = screen.getByText(/order for delivery/i);
  expect(menuHeading).toBeInTheDocument();
});
