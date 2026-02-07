import {
  fetchAvailableTimes,
  submitBooking,
  initializeTimes,
  timesReducer,
  initialTimesState,
  BOOKING_ACTIONS,
} from "./bookingApi";

describe("Booking API", () => {
  describe("fetchAvailableTimes", () => {
    test("returns array of times", () => {
      const date = new Date();
      const times = fetchAvailableTimes(date);
      expect(Array.isArray(times)).toBe(true);
      expect(times.length).toBeGreaterThan(0);
    });

    test("returns fallback times when API is not available", () => {
      // Temporarily remove window.fetchAPI if it exists
      const originalFetchAPI = window.fetchAPI;
      delete window.fetchAPI;

      const times = fetchAvailableTimes(new Date());
      expect(times).toContain("17:00");
      expect(times).toContain("18:00");

      // Restore
      window.fetchAPI = originalFetchAPI;
    });
  });

  describe("submitBooking", () => {
    test("returns boolean", () => {
      const formData = {
        date: "2026-03-01",
        time: "19:00",
        adults: 2,
        children: 0,
      };
      const result = submitBooking(formData);
      expect(typeof result).toBe("boolean");
    });
  });

  describe("initializeTimes", () => {
    test("returns array of times for today", () => {
      const times = initializeTimes();
      expect(Array.isArray(times)).toBe(true);
    });
  });

  describe("timesReducer", () => {
    test("handles UPDATE_TIMES action", () => {
      const newTimes = ["18:00", "19:00", "20:00"];
      const newState = timesReducer(initialTimesState, {
        type: BOOKING_ACTIONS.UPDATE_TIMES,
        payload: newTimes,
      });
      expect(newState.availableTimes).toEqual(newTimes);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBeNull();
    });

    test("handles SET_LOADING action", () => {
      const newState = timesReducer(initialTimesState, {
        type: BOOKING_ACTIONS.SET_LOADING,
      });
      expect(newState.loading).toBe(true);
    });

    test("handles SET_ERROR action", () => {
      const errorMessage = "Failed to fetch times";
      const newState = timesReducer(initialTimesState, {
        type: BOOKING_ACTIONS.SET_ERROR,
        payload: errorMessage,
      });
      expect(newState.error).toBe(errorMessage);
      expect(newState.loading).toBe(false);
    });

    test("returns current state for unknown action", () => {
      const state = { ...initialTimesState, availableTimes: ["18:00"] };
      const newState = timesReducer(state, { type: "UNKNOWN_ACTION" });
      expect(newState).toEqual(state);
    });
  });
});
