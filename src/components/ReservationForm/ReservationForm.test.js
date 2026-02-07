import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReservationForm from "./ReservationForm";

// Wrapper to provide router context
const renderWithRouter = (ui, { route = "/" } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

describe("ReservationForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockUpdateTimes = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Reserve a Table heading", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  });

  test("renders date input field", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });

  test("renders time select field", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  });

  test("renders adults and children selects", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    expect(screen.getByLabelText(/adults/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/children/i)).toBeInTheDocument();
  });

  test("renders submit button", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    expect(
      screen.getByRole("button", { name: /reserve a table/i }),
    ).toBeInTheDocument();
  });

  test("renders available times in dropdown", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    const timeSelect = screen.getByLabelText(/time/i);
    mockAvailableTimes.forEach((time) => {
      expect(timeSelect).toHaveTextContent(time);
    });
  });

  test("calls updateTimes when date changes", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2026-03-15" } });
    expect(mockUpdateTimes).toHaveBeenCalled();
  });

  test("disables time select when loading", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={[]}
        updateTimes={mockUpdateTimes}
        isLoading={true}
      />,
    );
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeDisabled();
  });

  test("updates adults select value on change", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    const adultsSelect = screen.getByLabelText(/adults/i);
    fireEvent.change(adultsSelect, { target: { value: "4" } });
    expect(adultsSelect.value).toBe("4");
  });

  test("date input has required attribute", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("time select has aria-required attribute", () => {
    renderWithRouter(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        isLoading={false}
      />,
    );
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute("aria-required", "true");
  });
});
