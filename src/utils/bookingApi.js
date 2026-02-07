// Booking API utilities
// The API is loaded from: https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// It exposes two functions on the window object:
// - fetchAPI(date) - returns available times for a date
// - submitAPI(formData) - submits booking and returns true on success

/**
 * Fetch available booking times for a given date
 * @param {Date} date - The date to check availability
 * @returns {string[]} Array of available time slots
 */
export const fetchAvailableTimes = (date) => {
  // The API expects a Date object
  if (window.fetchAPI) {
    return window.fetchAPI(date);
  }
  // Fallback times if API is not loaded
  console.warn("Booking API not loaded, using fallback times");
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

/**
 * Submit a booking reservation
 * @param {Object} formData - The booking form data
 * @returns {boolean} True if submission was successful
 */
export const submitBooking = (formData) => {
  if (window.submitAPI) {
    return window.submitAPI(formData);
  }
  // Fallback - simulate success
  console.warn("Booking API not loaded, simulating success");
  return true;
};

/**
 * Initialize available times for today's date
 * @returns {string[]} Array of available time slots for today
 */
export const initializeTimes = () => {
  const today = new Date();
  return fetchAvailableTimes(today);
};

/**
 * Reducer action types for booking state
 */
export const BOOKING_ACTIONS = {
  UPDATE_TIMES: "UPDATE_TIMES",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

/**
 * Reducer function for managing booking times state
 * @param {Object} state - Current state
 * @param {Object} action - Action to perform
 * @returns {Object} New state
 */
export const timesReducer = (state, action) => {
  switch (action.type) {
    case BOOKING_ACTIONS.UPDATE_TIMES:
      return {
        ...state,
        availableTimes: action.payload,
        loading: false,
        error: null,
      };
    case BOOKING_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

/**
 * Initial state for booking times
 */
export const initialTimesState = {
  availableTimes: [],
  loading: true,
  error: null,
};
